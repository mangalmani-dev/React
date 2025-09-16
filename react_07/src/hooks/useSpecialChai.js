import { useEffect, useState } from "react";


export function useSpecailChai(){
    const [chai , setChai]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error, setError]=useState(false)

    useEffect(()=>{
        fetch("/api/special-chai")
        .then((res)=>{
            if(!res.ok)throw new Error(
                "unable to fetch the masala chai",)
               return res.json()
        })
        .then((data)=>
        setChai(data),
    setLoading(false))
    .catch((error)=>{
        setError(error.message||"some thig went wrong")
        setLoading(false)
    }
)
    },[])
    return {chai,loading,error}
}