import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'

export default () => {
  const { loading, error, data = { favs: [1, 2, 3, 4, 5, 6, 7, 8, 9] } } = useGetFavorites()
  const { favs } = data
  return (
    <>
      <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos' >
        <ListOfFavs loading={loading} error={error} favs={favs} />
      </Layout>
    </>
  )
}
