'use client'

import React from 'react'

function MyButton(props) {
  const handleClick = (message) => {
    console.log('Button clicked with message: ',message)
    alert(`Button clicked! Message: ${message}`)
  }
  return <button onClick={() => handleClick(props.message)}>Click Me</button>
}

function App() {
  return <MyButton message="Hello from React!" />
}

export default App