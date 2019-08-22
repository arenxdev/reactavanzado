import React from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './styles'
import { useToogleLikeMutation } from '../../hooks/useToogleLikeMutation'
import { useNearScreen } from '../../hooks/useNearScreen'
import Skeleton from 'react-loading-skeleton'
import { FavButton } from '../FavButton'
import PropTypes from 'prop-types'

export const PhotoCard = ({ id, liked, likes, src, loading }) => {
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

  const [show, element] = useNearScreen()
  const toogleLike = useToogleLikeMutation()
  const handleFavClick = () => toogleLike(id)

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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`Value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`Value must be greater than 0`)
    }
  },
  src: PropTypes.string.isRequired,
  loading: PropTypes.bool
}
