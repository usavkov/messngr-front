import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { AuthProvider } from './utils';
import { MAX_SNACK } from './constants';

import { App } from './App';

import './index.scss';

const env = process ? process.env : runtimeEnv();

const returnJWT = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

const wsClient = new SubscriptionClient(
  env.REACT_APP_APOLLO_WS_SERVER_URI,
  {
    reconnect: true,
  },
);

wsClient.use([
  {
    applyMiddleware(operationOptions, next) {
      operationOptions.token = returnJWT();
      next();
    },
  },
]);

const wsLink = new WebSocketLink(wsClient);

const httpLink = new HttpLink({
  uri: env.REACT_APP_APOLLO_HTTP_SERVER_URI,
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: returnJWT(),
  },
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getMessagesByDialogId: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
        },
      },
      Dialog: {
        fields: {
          messages: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          {/* <ThemeProvider theme={theme}> */}
          <SnackbarProvider maxSnack={MAX_SNACK}>
            <App />
          </SnackbarProvider>
          {/* </ThemeProvider> */}
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
