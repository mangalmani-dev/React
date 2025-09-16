import React, { useState } from 'react'

const ChaiOrder = () => {

    const [count ,setcount]=useState(0)
    
    const serveChai=()=>{
        setcount(prev=>prev+1 )
    }
    }
  return (
    <div>
        <h2>Chai counters</h2>
        <p>you have served {} cup of chai</p>
        <button onClick={serveChai}>Serve chai</button>
        

    </div>
  )


export default ChaiOrder