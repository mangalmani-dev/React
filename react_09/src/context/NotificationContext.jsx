import { createContext, useContext, useState } from "react";

const NotificationContext=useContext()

export function NotificationProvider({children}){
   const [count,setCount]=useState(0)

   const addNotification=()=>{
      setCount((prev)=>prev+1)
   }

      const resetNotification=()=>{
      setCount(0)
   }

   return <NotificationContext.Provider value={{count,addNotification,resetNotification}}>
      {children}
   </NotificationContext.Provider>
} 

// custom hooks  

export function useNotification(){
    return useContext(NotificationContext)
}