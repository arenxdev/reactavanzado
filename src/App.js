import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyle'

const NotFound = React.lazy(() => import('./pages/NotFound'))
const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  )
}
