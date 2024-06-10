import React, {useState} from 'react'
import "./Login.scss"
import { FormProps } from "../../types/auth"
import FormUI from './FormUI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const formProps: FormProps = {
        email: email,
        password: password,
        error: error,
        modEmail: email=>setEmail(email),
        modPwd: pwd=>setPassword(pwd),
        modErr: err=>setEmail(err)
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
        setError('Please fill in all fields');
        return;
        }

        console.log('Email:', email);
        console.log('Password:', password);

        
    };
return<>
    <h2>Login</h2>
    <div className="login">
        <div className="forms">
            <h1>Sign in to store</h1>
            <div className="oauths">
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
            </div><br />
            <FormUI {...formProps}/>
            
        </div>
        <div className="sign-up"></div>
    </div>
</>
}
