import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
