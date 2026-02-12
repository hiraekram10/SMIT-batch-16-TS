import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditComp from './EditComp'

function App() {
 const [open,setOpen]= useState(false)

  return (
    <>
   <Counter/>
   <EditComp open={open} setOpen={setOpen}/>
   <button onClick={()=>setOpen(true)}>edit</button>

   
       
    </>
  )
}

export default App
