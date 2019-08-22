import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ id }) => (
  <>
    <Layout title='Petgram - tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales domésticos muy bonitos' >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
)

export default React.memo(HomePage, (prevProps, props) => prevProps.id === props.id)
