import ApolloClient from "apollo-boost";

export const Client = new ApolloClient({
  uri: "/graphql"
});


export default Client;