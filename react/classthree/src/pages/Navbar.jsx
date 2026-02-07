import React from 'react'

const Navbar = ({quizScore, age , subject}) => {
    console.log(quizScore,age,subject);
    

  return (
    <div>
        <h1>js</h1>
        marks {quizScore || '0'}, in {subject || 'subj'} age: {age || 18}</div>
  )
}




export default Navbar