import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLoginMutation = (email, password) => {
  const [mutation, { data, error, loading }] = useMutation(LOGIN)
  const loginUser = (email, password) => {
    mutation({ variables: { input: { email, password } } })
  }
  return { loginUser, data, error, loading }
}
