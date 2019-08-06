import React from 'react'
import { Anchor, Image } from './styles'
import Skeleton from 'react-loading-skeleton'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', loading = false }) => {
  return (
    <Anchor href={path}>
      {loading && <Skeleton circle width={75} height={75} />}
      {loading && <Skeleton circle width={21} height={21} />}
      {!loading && <Image src={cover} />}
      {!loading && emoji}
    </Anchor>
  )
}
