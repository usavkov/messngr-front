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
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { AuthProvider } from './utils';
import { MAX_SNACK } from './constants';

import { App } from './App';

import './index.scss';

// TODO: find way to retrieve env vars properly
const config = {
  api: 'https://messngr-back-stage.herokuapp.com/graphql',
  ws: 'wss://messngr-back-stage.herokuapp.com/graphql',
};

const returnJWT = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

const wsClient = new SubscriptionClient(
  process.env.REACT_APP_WS_URL || config.ws,
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
  uri: process.env.REACT_APP_API_URL || config.api,
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
