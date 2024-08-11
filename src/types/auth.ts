
export type FormProps = {
  email: string;
  password: string;
  modEmail: (email: string) => void;
  modPwd: (pwd: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type AuthContextType ={
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
  jwt: string
  setJwt: (jwt: string)=> void
}