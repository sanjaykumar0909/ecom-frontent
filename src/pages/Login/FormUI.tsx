import React, { useState } from 'react'
import { FormProps } from "../../types/auth"
import UserLogo from "../../assets/user-solid.svg"
import LockLogo from "../../assets/lock-solid.svg"
import "./FormUI.scss"

export default function FormUI({ email, modEmail, password, modPwd, handleSubmit, isLogin }: FormProps & {isLogin: boolean}){
    let [cpassword, setCpassword] = useState<string>(password)
    return<>
     <div className='form-ui'>
        <h2>Login with Email:</h2>
          {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
          <form onSubmit= {(e : React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            if (password.length < 4){
                alert('Password atleast 4 characters required!')
            }else if (!isLogin && (password !== cpassword)){
                alert('Password do not match!')
            }else{
                handleSubmit(e)
            }
          }}>
              <label>   
                <img src={UserLogo} alt="userlogo" />
                <input  
                  type="email"
                  name='email'
                  value={email}
                  placeholder='Email'
                  required
                  onChange={(e) => modEmail(e.target.value)}
                />    
              </label>
              <label>
                <img src={LockLogo} alt="locklogo" />
                <input
                  type="password"
                  placeholder='Password'
                  required
                  name='password'
                  value={password}  
                  onChange={(e) => modPwd(e.target.value)}
                />
              </label>
              {
                !isLogin &&
                <label>
                    <img src={LockLogo} style={{opacity: "0"}} />
                    <input 
                        type="password"
                        placeholder='Confirm Password'
                        required
                        value={cpassword}
                        onChange={e=> setCpassword(e.target.value)}
                    />
                </label>
              }
              
              <button type="submit">{isLogin? 'Login' : 'Sign up'}</button>
          </form>
        </div>
    </>
    }