import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setcounter]=useState(15)
  const addvalue=() => {
    setcounter(counter+1)
  }

    const removevalue = () => {
      setcounter(counter-1)
    }


  

  return (
    <>
       <h1>react course with prasath {counter}</h1>
       <h2>counter value {counter}</h2>
       <button 
       onClick={addvalue}>add value</button>
       <button onClick={removevalue}>remove value</button>
       <p>footer:{counter}</p>
    </>
  )
}

export default App
