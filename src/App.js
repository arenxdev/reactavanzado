import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardDetail } from './components/PhotoCardDetail'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardDetail id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
      }
    </>
  )
}
