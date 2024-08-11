import "./Login.scss"
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import axios, { AxiosError } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import FormUI from './FormUI'
import ErrorBox from "../../components/ErrorUI/ErrorBox"
import BufferAni from "../../components/BufferAni/BufferAni"

import { useAuthContext } from "../../context/AuthContext"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api', // Your Express server URL
    withCredentials: true // Include credentials if necessary
});

export default function Login() {
    const [isLogin, setLogin] = useState(true)
    const [email, modEmail] = useState('')
    const [password, modPwd] = useState('')
    const [loading, setLoading] = useState(false)
    let [respError, setRespError] = useState('')
    const navigate = useNavigate()
    const auth = useAuthContext()
    const redirected = useLocation()
    useEffect(()=>{
        console.log(redirected.state);
        setRespError(redirected.state ? 'Your session expired, please login to continue.': '')
        if (redirected.state) {
            navigate(location.pathname, { replace: true, state: null });
        }
    }, [])

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            let form= e.target as HTMLFormElement
            setLoading(true)
            let res= await axiosInstance.post("http://localhost:3001/auth/login/", {
                "email": form.email.value,
                "password": form.password.value
            },{
                headers:{
                    "Content-Type": "application/json"
                }
            })
            console.log(res.data);
            
            auth.setJwt(res.data.accessToken)
            auth.setUser(res.data.email)
            navigate("/store")
            setTimeout(() => {
                setLoading(false)
            }, 1650);
            
        }catch(e){
            console.log(e)
            setLoading(false)
            let error = e as AxiosError
            // @ts-ignore
            if ((error.response?.data?.error as string).toLowerCase() === 'no user exist'){
                setRespError('No user exist with the email.')
            }
            // @ts-ignore
            else if ((error.response?.data?.error as string).toLowerCase() === 'incorrect password'){
                setRespError("You've entered incorrect password")
            }
        }
    };
    const handleSignupSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try{
            let form= e.target as HTMLFormElement
            setLoading(true)
            let res= await axiosInstance.post("http://localhost:3001/auth/signup/", {
                "email": form.email.value,
                "password": form.password.value
            },{
                headers:{
                    "Content-Type": "application/json"
                }
            })
            auth.setJwt(res.data.accessToken)
            auth.setUser(res.data.email)
            navigate("/store")
            setTimeout(() => {
                setLoading(false)
            }, 1650);
        }catch(e){
            console.log(e)
            setLoading(false)
            const error = e as AxiosError
            // @ts-ignore
            if ((error.response?.data?.error as string).toLocaleLowerCase()  === 'user already exists'){
                setRespError('User with that email already exists.')
            }
        }
        
    }
    const loginForm ={
        email,
        password,
        modEmail,
        modPwd,
    }
return<>
{loading && <BufferAni />}
{respError && <ErrorBox msg={respError} onClick={()=>setRespError('')}/>}
    <div className="login">
        {
            isLogin && 
            <div className="forms">
                <h1>Login to store</h1>
                <div className="oauths">
                    <FontAwesomeIcon icon={faGoogle} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div><br />
                <FormUI {...{...loginForm, handleSubmit: handleLoginSubmit, isLogin:true}}/>
            </div>
        }
        {
            !isLogin &&
            <div className="forms">
                <h1>Sign up with store</h1>
                <div className="oauths">
                    <FontAwesomeIcon icon={faGoogle} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div><br />
                <FormUI {...{...loginForm, handleSubmit: handleSignupSubmit, isLogin: false}} />
                
            </div>
        }
        <div className="switch">
            <h1>Welcome to store!</h1>
            { isLogin ? 
                <h1>Don't have an account?</h1> :
                <h1>Already have an account?</h1>
            }
            <button onClick={()=>{
                setLogin(p=>!p)
                modEmail('')
                modPwd('')
            }}>{isLogin? "Sign up" : "Login"}</button>
        </div>
        <div className="horzontal-spacing" style={{height: ""}}></div>
    </div>
</>
}
