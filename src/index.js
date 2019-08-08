import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-afisaacs-server-ptq2tov5n.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
