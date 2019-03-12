/* eslint-disable import/order */
import React from 'react';

// styles
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './services/theme.semantic';

// components
import Router from 'routes/Router';

// apollo
import apolloClient from './services/apolloClient';
import { ApolloProvider } from 'react-apollo';

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <>
        <Router />
        <GlobalStyle />
      </>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
