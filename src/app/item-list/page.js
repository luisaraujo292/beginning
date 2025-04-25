'use client'

import { setConfig } from 'next/config'
import { INTERCEPTION_ROUTE_REWRITE_MANIFEST } from 'next/dist/shared/lib/constants'
import React,  {useState} from 'react'

function ItemList() {
  const [items,setItems] = useState(['Item 1','Item 2','Item 3'])
  const [newItem,setNewItem] = useState('')
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items,newItem])
      setNewItem('')
    }
  }
  return (
    <div>
      <ul>{
        items.map((item,index) => 
          (<li key={index}>{item}</li>)
        )}
      </ul>
      <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)}></input>
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default ItemList
