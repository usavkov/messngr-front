import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { AuthProvider } from './utils';

import App from './App';

import './index.scss';
import { NavProvider } from './utils/navigation';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_URI,
  credentials: 'same-origin',
});

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <NavProvider>
            <App />
          </NavProvider>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
