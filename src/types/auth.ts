
export type FormProps = {
  email: string;
  password: string;
  error: string;
  modEmail: (email: string) => void;
  modPwd: (pwd: string) => void;
  modErr: (err: string) => void;
};

export type AuthContextType ={
  user: void
  setUser: React.Dispatch<React.SetStateAction<void>>
  authTokens: unknown
  setAuthTokens: React.Dispatch<React.SetStateAction<void>>
  signupUser: (email: string, username: string, password1: string, password2: string) => Promise<void>
  loginUser: (email: string, password: string) => Promise<void>
  logoutUser: ()=>void
}