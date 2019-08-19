import React, { createContext, useState } from 'react'

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => { setIsAuth(true) }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

const Context = createContext()

export default { Provider, Consumer: Context.Consumer }
