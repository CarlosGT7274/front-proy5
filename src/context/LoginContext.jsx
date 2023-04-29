import React, { createContext, useState } from 'react'

export const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({})
  return (
    <div>
      <LoginContext.Provider value={{ loginUser, setLoginUser }}>
        {children}
      </LoginContext.Provider>
    </div>
  )
}

export default LoginProvider
