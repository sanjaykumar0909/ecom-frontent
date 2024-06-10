import { createContext, useState, useEffect, Children, ReactNode } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import {AuthContextType} from "../types/auth"

const AuthContext= createContext({} as AuthContextType)

export default AuthContext

export const AuthProvider = ({children}: {children: ReactNode})=>{
    const [authTokens, setAuthTokens] = useState(()=>{
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens") as string)
            : null;
    })
    const [user, setUser] = useState(()=>{
        localStorage.getItem("authTokens")
            ? jwt_decode.jwtDecode(localStorage.getItem("authTokens") as string)
            : null
        }
    )
    const [loading, setLoading] = useState<boolean>(true)
    const navigate= useNavigate()
    const loginUser = async (email: string, password: string)=>{
        const resp= await fetch("bkend/url/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data= await resp.json()
        if (resp.ok){
            console.log("Logged in");
            setAuthTokens(data)
            setUser(jwt_decode.jwtDecode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            navigate("/store")
            
        }else{
            console.log("jwt error status:", resp.status);
            
        }
    }
    const signupUser = async (email: string, username: string, password1: string, password2: string)=>{
        const resp = await fetch('bkend/url/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, username, password1, password2
            })
        })
        const data= await resp.json()
        if (resp.ok){
           // NOTE: set jwt on new sign-in?
           navigate("/store")
        }else{
            console.log("signup error", resp.status);
        }
        
    }
    const logoutUser = ()=>{
        // set setAuthTokens and setUser to null
        localStorage.removeItem("authTokens")
        navigate("/login")
   }
    const contextData: AuthContextType = {
        user, setUser, authTokens, setAuthTokens, signupUser, loginUser, logoutUser
    }
    // useEffect(()=>{
    //     if (authTokens){
    //         setUser(jwt_decode.jwtDecode(authTokens.access))
    //     }
    // })
return<>
    <AuthContext.Provider value={contextData} >
        {loading? null : children}
    </AuthContext.Provider>
</>
}
