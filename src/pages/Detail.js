import React from 'react'
import { PhotoCardDetail } from '../components/PhotoCardDetail'
import { Layout } from '../components/Layout'

export default ({ id }) => (
  <Layout title={`Fotografía ${id}`}>
    <PhotoCardDetail id={id} />
  </Layout>
)
