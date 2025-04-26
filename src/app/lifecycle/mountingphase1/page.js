/*
During the mounting phase, a functional component is being 
created and added to the DOM. In this phase, you typically 
initialise state and perform any setup that’s needed when 
the component is first rendered.

The useState hook allows you to add state to your 
functional components. It replaces the need for a 
constructor and this.state in class components. You can 
initialise state and retrieve the current value

*/
'use client'

import React, {useState} from 'react'

function MountingPhaseExample() {
  const[data,setdata] = useState(null)
  return <div>{data ? data : 'Loading ...'}</div>
}

export default MountingPhaseExample
