import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
export const Client = new ApolloClient({
  uri: "/graphql",
  // cache,
});


export default Client;