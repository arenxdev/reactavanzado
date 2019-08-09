import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

export const useToogleLikeMutation = id => {
  const [toogleLike] = useMutation(LIKE_PHOTO)
  return toogleLike
}
