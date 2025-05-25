// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.0.197:4000/graphql', // Replace with your server URL
  }),
  cache: new InMemoryCache(),
});

export default client;
