import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditComp from './EditComp'
import MyForm from './component/MyForm'
import Cards from './component/Cards'
import AppRouter from './routing/AppRouter'

function App() {
 const [open,setOpen]= useState(false)

  return (
    <>
 <AppRouter/>

   
       
    </>
  )
}

export default App
