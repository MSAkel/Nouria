import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import config from "../../aws-exports";

const client = new ApolloClient({
  link: createHttpLink({
    uri: config.API.GraphQL.endpoint,
    headers: {
      "x-api-key": config.API.GraphQL.apiKey, // Temporary API key (use Cognito later)
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
