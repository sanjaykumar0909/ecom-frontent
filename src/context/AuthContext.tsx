import { useContext, createContext, ReactNode, useState } from "react";
import { AuthContextType } from "../types/auth";

const AuthContext = createContext({} as AuthContextType)

export function useAuthContext(){
    return useContext(AuthContext)
}
export const AuthProvider = ({children}:{children: ReactNode})=>{
    let [jwt, setJwt] = useState('')
    let [email, setEmail] = useState('')

return<>
    <AuthContext.Provider value={{user: email, setUser: setEmail, jwt, setJwt}}>
        {children}
    </AuthContext.Provider>
</>
}
