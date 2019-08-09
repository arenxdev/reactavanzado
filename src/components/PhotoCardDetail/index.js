import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export const PhotoCardDetail = ({ id }) => {
  const { error, loading, data } = useGetSinglePhoto(id)
  if (error) return 'error'
  if (loading) return <PhotoCard loading />
  return <PhotoCard {...data.photo} />
}
