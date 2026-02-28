import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './compontnts/Hero'
import Countercontext from './context/CounterContext'

function App() {
  const [count, setCount] = useState(10)

  return (
   <Countercontext.Provider value={{count,setCount}} >
     <Hero/>
   </Countercontext.Provider>

  )
}

export default App
