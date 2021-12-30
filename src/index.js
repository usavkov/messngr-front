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
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { AuthProvider, theme } from './utils';
import { MAX_SNACK } from './constants';

import App from './App';

import './index.scss';

const returnJWT = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : null;
};

const wsClient = new SubscriptionClient(
  process.env.REACT_APP_APOLLO_WS_SERVER_URI,
  {
    reconnect: true,
  },
);

wsClient.use([
  {
    applyMiddleware(operationOptions, next) {
      operationOptions['token'] = returnJWT();
      next();
    },
  },
]);

const wsLink = new WebSocketLink(wsClient);

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_HTTP_SERVER_URI,
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: returnJWT(),
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
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
