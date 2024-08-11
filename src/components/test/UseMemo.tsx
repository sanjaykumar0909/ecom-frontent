import { useEffect, useMemo, useState } from "react"

export default function Test(){
    let [s1, set1]= useState(0)
    let [s2, set2]= useState(99999999)
    const expensive = (n:number)=>{
        let r=0;
        for (let i=0; i<s2; i++){
            r+= Math.sqrt(i)
        }
        set1(r)
    }
    const expensive2 = (n:number)=>{
        let r=0;
        for (let i=0; i<s2; i++){
            r+= Math.sqrt(i)
        }
        return r
    }
    // useEffect(()=>{
    //     expensive(s2)
    // },[s2])
    let res= useMemo(()=> expensive2(s2),[s2])
    const b1h= ()=> {
        set1(p=>p+1)
    }, b2h = ()=>{
        set2(p=>p+1)
    }
return<>
    <h2>{s1}</h2>
    <h2>{s2}</h2>
    <h2>{res}</h2>
    <button onClick={b1h}>s1</button>
    <button onClick={b2h}>s2</button>
    <button onClick={()=>{set1(0)}}>reset</button>
</>
}