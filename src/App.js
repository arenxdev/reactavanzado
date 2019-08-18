import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
      <Detail path='/detail/:id' />
    </Router>
    <Navbar />
  </>
)
