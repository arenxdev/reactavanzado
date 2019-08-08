import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)
  if (error) return 'error'
  return (
    <ul>
      {loading && [1, 2, 3].map(id => (
        <PhotoCard key={id} loading />
      ))}
      {!loading && data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
