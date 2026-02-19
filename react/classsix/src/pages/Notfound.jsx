import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()



  return (
    <div>404 Notfound


            <button onClick={()=>navigate('/')}>go to home</button>
    </div>
  )
}

export default Notfound