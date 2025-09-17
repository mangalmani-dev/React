import {useState} from 'react'

import { UseContactForm } from './component/UsesContactForm'

function ContactForm() {

    const [form, setForm]=useState({name:"",email :"",message :""})
      
    const {loading,submitContact,successMessage,errorMessage}= UseContactForm
const handleSubmit=(e)=>{
e.preventDefault()
}

const handleChange =(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
}

  return (
    <div>
        ConatctForm
      <form onSubmit={handleSubmit}></form>
      <input 
         name='name'
         form='form.name'
         onChange={handleChange}
         placeholder='you name'

      />
        <form onSubmit={handleSubmit}></form>
      <input 
         name='email'
         form='form.email'
         onChange={handleChange}
         placeholder='you email'

      />
        <form onSubmit={handleSubmit}>
      <input 
         name='message'
         form='form.message'
         onChange={handleChange}
         placeholder='you message'
      />

      <button type='submit' disabled ={loading}>
        {loading ? "sending...": "send"}
      </button>
      </form>

      {successMessage && <p>{successMessage} </p>}
            {errorMessage && <p>{errorMessage} </p>}
    </div>
  )
}

export default ContactForm