import React from 'react'

import { useEffect,useState } from 'react'
const ChaiMenu = () => {

    const [menu,setMenu]=useState([])
    const [error,setError]=useState("")

    useEffect(()=>{
      fetch("/api/all-chai")
      .then((res)=>res.json())
      .then((data)=>setMenu(data))
      .then((error)=>setError(error.message))

    },[])
  return (  
    <div>
        <h2>menu of all the chai</h2>
        <ul>
            {menu.map(chai=>(
                <li key={chai.id}>{chai.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default ChaiMenu