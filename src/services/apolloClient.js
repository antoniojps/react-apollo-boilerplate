// apollo
import ApolloClient from 'apollo-boost';
import { ENDPOINT_GRAPHQL } from './constants';

// apollo client
const defaultState = {
  isEditMode: false,
};

// configuration options:
// https://www.apollographql.com/docs/react/essentials/get-started.html#configuration
const client = new ApolloClient({
  uri: ENDPOINT_GRAPHQL,
  credentials: 'include',
  clientState: {
    defaults: defaultState,
    resolvers: {},
  },
});

export default client;
