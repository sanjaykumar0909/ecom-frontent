import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
export default function Test2(){
    const navigate= useNavigate()
    const loc= useLocation()
    useEffect(()=>{
        console.log("exe.");
        console.log(loc.state);
        
        if (loc.state)
        navigate('/testing/t2')
        console.log('stopped');
        
    })
return<>
    <h2>Hello!</h2>
</>
}