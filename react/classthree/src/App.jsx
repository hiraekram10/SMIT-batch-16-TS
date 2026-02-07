import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './pages/Navbar'
import StateTheory from './components/stateTheory'



function App() {
//  const score = 36
//  const i = 4

// const data = [
//   {
//     quizScore:90, age:20 , subject:'js'
//   },
//   {
//     quizScore:80, age:20 , subject:'html'
//   },
//   {
//     quizScore:70, age:20 , subject:'css'
//   },
// ]

  return (
    <>
  
  {/* <Hero/> */}
  {/* <ul>
    {data.map((item,i)=>(
      <Navbar key={i} quizScore={item.quizScore} age={item.age} subject={item.subject}/>
    ))}
  </ul> */}


<StateTheory/>
  


    </>
  )
}

export default App
