import React, { createContext, useState } from 'react'

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserProvider
