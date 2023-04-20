import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";

const link = from([
  new HttpLink({ uri: "https://profound-marmot-29.hasura.app/v1/graphql/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
