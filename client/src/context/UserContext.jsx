import React, { createContex} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => { 

    return (
        <UserContext.Provider value={{
            // isLoggedIn, setIsLoggedIn,
            // token, setToken,
            // userData, getUserData,
            // userPermissions, getUserPermissions
            }}>
            { children }
        </UserContext.Provider>
    )
}
