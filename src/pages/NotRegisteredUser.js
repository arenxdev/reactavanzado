import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)
  const { registerUser, data: dataReg, error: errorReg, loading: loadingReg } = useRegisterMutation()
  const { loginUser, data: dataLog, error: errorLog, loading: loadingLog } = useLoginMutation()

  const errorMsgReg = errorReg && 'El usuario ya existe o hay algún problema'
  const errorMsgLog = errorLog && 'La contraseña no es correcta o el usuario no existe'

  if (dataReg || dataLog) {
    const token = dataReg ? dataReg.signup : dataLog.login
    activateAuth(token)
  }

  return (
    <>
      <UserForm error={errorMsgReg} disabled={loadingReg} onSubmit={registerUser} title='Registrarse' />
      <UserForm error={errorMsgLog} disabled={loadingLog} onSubmit={loginUser} title='Iniciar sesión' />
    </>
  )
}
