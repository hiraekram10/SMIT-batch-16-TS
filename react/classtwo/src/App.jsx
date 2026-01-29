import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <Navbar/>
<Hero/>
    </>
  )
}

export default App
