import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import Skeleton from 'react-loading-skeleton'

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
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`/detail/${id}`} >
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
