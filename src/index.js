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

import { AuthProvider, theme } from './utils';

import App from './App';

import './index.scss';
import { MAX_SNACK } from './constants';

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_APOLLO_WS_SERVER_URI,
  options: {
    reconnect: true,
    connectionParams: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  },
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_HTTP_SERVER_URI,
  credentials: 'same-origin',
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

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

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
