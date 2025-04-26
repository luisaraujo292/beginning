/* The useEffect hook with an empty dependency array 
simulates the componentDidMount lifecycle method. It 
runs the provided function after the component is 
first rendered. This is a good place to perform data 
fetching or initial setup.
*/

'use client'

import React, {useState,useEffect} from 'react'

function MountingPhaseExample() {
  const[data,setData] = useState(null)
  useEffect(() => { 
    // Simulate datafetching
    setTimeout(() =>     
      {setData('Fetched data')},2000)
  },[])
  return <div>{data ? data : 'Loading ...'}</div>
}

export default MountingPhaseExample
