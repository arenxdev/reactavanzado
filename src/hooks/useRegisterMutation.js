import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const useRegisterMutation = (email, password) => {
  const [mutation, { data, error, loading }] = useMutation(REGISTER)
  const registerUser = (email, password) => {
    mutation({ variables: { input: { email, password } } })
  }
  return { registerUser, data, error, loading }
}
