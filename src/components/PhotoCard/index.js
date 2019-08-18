import React from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './styles'
import { useToogleLikeMutation } from '../../hooks/useToogleLikeMutation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import Skeleton from 'react-loading-skeleton'
import { FavButton } from '../FavButton'

export const PhotoCard = ({ id, likes, src, loading }) => {
  if (loading) {
    return (
      <>
        <Skeleton height={240} />
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <div style={{ marginLeft: '2px' }} >
            <Skeleton circle width={32} height={32} />
          </div>
          <div style={{ marginLeft: '10px' }} >
            <Skeleton height={20} width={100} />
          </div>
        </div>
      </>
    )
  }

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const toogleLike = useToogleLikeMutation()
  const handleFavClick = () => {
    !liked && toogleLike({ variables: { input: { id } } })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`} >
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
}
