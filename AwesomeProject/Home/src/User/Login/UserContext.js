
import React, { useState, useContext, createContext } from 'react'


export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [User, setUser] = useState(false);
const [keyword, setKeyword] = useState('')
    return (
        <UserContext.Provider value={{User,setUser,keyword, setKeyword}} >
            {children}
        </UserContext.Provider>
    )
}

