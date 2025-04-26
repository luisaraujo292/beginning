'use client'

import React, {useState} from 'react'

function MyForm() {
  const [inputValue,setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()  // Prevent default form submission
    console.log('Form submitted with value: ',inputValue)
    alert(`Form submitted with value: ${inputValue}`)
  }
  return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
    </form>
  ) 
}

export default MyForm
