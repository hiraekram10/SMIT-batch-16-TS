import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './compontnts/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <button className=' text-white bg-pink-700 hover:bg-pink-800 hover:text-black px-10 py-3 text-2xl font-hira rounded-xl border border-amber-300  m-22.5'>hello</button>
    <h1 className='text-3xl font-black  font-hira'>  Raect with tailwind css</h1>
    <p className='text-pink'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis eaque amet minima dignissimos, quidem provident, eligendi repellendus perspiciatis rerum exercitationem quas a odio doloribus, in doloremque earum? Alias, repudiandae.</p> */}
    <Hero/>
    </>
  )
}

export default App
