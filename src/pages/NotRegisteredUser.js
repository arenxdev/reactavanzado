import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerUser, data } = useRegisterMutation()
  if (data) {
    console.log(data)
    return (
      <Context.Consumer>
        {({ isAuth, activateAuth }) => activateAuth() }
      </Context.Consumer>
    )
  }

  return (
    <>
      <UserForm onSubmit={registerUser} title='Registrarse' />
      <UserForm title='Iniciar sesión' />
    </>
  )
}
