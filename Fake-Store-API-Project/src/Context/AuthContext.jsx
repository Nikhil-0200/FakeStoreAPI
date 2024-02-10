import { useState } from "react"
import React from "react"

export const AuthContext = React.createContext()

export default function AuthContextProvider(prop){
        const [isLoggedIn, setIsLoggedIn] = useState(false)
   
        const input = {
            isLoggedIn, 
            setIsLoggedIn,
        }
        return (
            <AuthContext.Provider  value={input}>
                {prop.children}
            </AuthContext.Provider>
        
          )

    }

  