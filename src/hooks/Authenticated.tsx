import { useEffect } from "react"
import axios from "axios"

import { useAuthContext } from "../context/AuthContext";
import useAuthError from "./AuthError";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/', // Your Express server URL
    withCredentials: true // Include credentials if necessary
});
type Header = {
    Authorization? : string
}
const useAuthenticated = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const user = useAuthContext()
    const authError = useAuthError()
    let header: Header = {}
    
    if (user.jwt){
        header.Authorization = user.jwt
    }

    useEffect(()=>{
        const authenticated = async () =>{
            setLoading(true)
            try {
                const res= await axiosInstance.get("/auth/access/", {headers: header})
                setLoading(false)
                user.setUser(res.data.email)
                user.setJwt(res.data.jwt)
                console.log(res.data);
                
            } catch (err) {
                setLoading(false)
                console.log(err);
                authError(err)
            }
            
        }
        authenticated()
        
    },[])
}

export default useAuthenticated