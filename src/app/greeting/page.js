import React from 'react'

function Greeting(props) {
  return(
    <div>
      <h1>Hello, {props.name}! {props.message}</h1>
      <ul>
        <p1>My hobbies:</p1>
        {props.hobbies.map((hobby,index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return(
    <Greeting
      name="Luís Sérgio"
      message="Well come to my React Application!"
      hobbies={["Coding","Reading","Hiking"]}>
    </Greeting>
  )
}

export default App
