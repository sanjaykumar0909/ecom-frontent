import React from 'react'
import { FormProps } from "../../types/auth"
import UserLogo from "../../assets/user-solid.svg"
import LockLogo from "../../assets/lock-solid.svg"
import "./FormUI.scss"

export default function FormUI({ email, modEmail, password, modPwd, error }: FormProps){
    
    return<>
     <div className='form-ui'>
        <h2>Login with Email:</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={()=>{}}>
              <label>   
                <img src={UserLogo} alt="userlogo" />
                <input
                  type="email"
                  value={email}
                  placeholder='Email'
                  onChange={(e) => modEmail(e.target.value)}
                />
              </label>
              <label>
              <img src={LockLogo} alt="locklogo" />
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => modPwd(e.target.value)}
                />
              </label>
            <button type="submit">Login</button>
          </form>
        </div>
    </>
    }