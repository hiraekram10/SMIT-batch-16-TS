import React,{useState} from 'react'
import Orange from '../assets/images/orange.jpg'
import Bnana from '../assets/images/bnana.jpg'

const Counter = () => {
    let [aloo,setAloo] = useState('orange')
    const [checkValue,setCheckValue] = useState(true)
    
    const handleClick= ()=>{
      if(checkValue){
        setAloo('bnana')
        console.log('value false hgai');
        
        setCheckValue(false)
      }else{
        setAloo('orange')
           console.log('value true hgai');
        setCheckValue(true)
      }
    }
 return(
 <>
 <div>
    
    <img src={checkValue  ? Orange : Bnana} alt="" />
     <h1>{aloo}</h1>
 </div>

   <button onClick={handleClick}></button>
 </>
  )
}

export default Counter