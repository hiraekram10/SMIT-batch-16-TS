import React from 'react'
import Navbar from '../pages/Navbar'

const Hero = () => {
    let jsScore = 90
  return (
    <div>
heroo
       {/* <Navbar/> */}
       <h1>html</h1>
       <Navbar quizScore={jsScore} subject={'html'} age={20}/>
    </div>
  )
}

export default Hero