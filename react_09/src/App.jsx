import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCartStore } from './store/cartStore'

function App() {
  const [count, setCount] = useState(0)

 const cartCount= useCartStore((state)=>state.cart.length)

 const addToCart=useCartStore((state)=>state.cart.addToCart)

  return (
    <>
     <h1> This class is for state management</h1>
    </>
  )
}

export default App
