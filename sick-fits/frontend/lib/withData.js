import withApollo from "next-with-apollo"
import ApolloClient from "apollo-boost"
import { endpoint } from "../config"

function createClient({ headers }) {
  return new ApolloClient({
    uri: "https://blackcoffee.herokuapp.com/v1alpha1/graphql",
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      })
    }
  })
}

export default withApollo(createClient)
