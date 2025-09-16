import { useState } from 'react'

import './App.css'
import { useSpecailChai } from './hooks/useSpecialChai.js'
import ChaiMenu from './component/Allchai.jsx'


function App() {

  const {chai, loading,error}=useSpecailChai()
  const [message , setmessage]=useState(1)
   
  // if(loading) return <h2>loading...</h2>
  //   if(error) return <h2>error :{error}</h2>

  

  return (
    <div>
      <h1>welcome to chai aur react</h1>
      <p>serving hot chai with react</p>
      <p>you have been served {message} chai</p>
      <ChaiMenu/>
      <h3>{chai?.name}</h3>
     
    </div>



  )
}

export default App
