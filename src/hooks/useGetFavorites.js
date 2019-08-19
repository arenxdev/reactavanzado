import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const getFavs = gql`
  query getFavs {
    favs {
      id,
      categoryId,
      src,
      likes,
      userId
    }
  }
`

export const useGetFavorites = categoryId => {
  const { loading, data, error } = useQuery(getFavs, { fetchPolicy: 'network-only' })
  return { loading, data, error }
}
