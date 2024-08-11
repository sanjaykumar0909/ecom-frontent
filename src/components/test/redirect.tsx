import { useNavigate } from "react-router-dom"

export default function Redirect(){
    const navigate= useNavigate()

return<>
<button onClick={()=>{navigate('/testing/t2', {state: "testing"})}}>redirect</button>
</>
}