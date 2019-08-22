import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link, Grid, Image, GridSkeleton } from './style'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs, loading, error }) => {
  if (error) return 'error'
  return (
    <ul>
      <Grid>
        {loading &&
          <GridSkeleton>
            {favs.map(id => (<Skeleton key={id} height={150} width={150} style={{ display: 'block' }} />))}
          </GridSkeleton>
        }
        {!loading && favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))}
      </Grid>
    </ul>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}
