import React,{useState} from 'react'

const StateTheory = () => {
    // let a = 10  normal variable


    // const incNum =()=>{
    //     a = a + 10
    //     console.log(a);
        
    // }
    // console.log(useState);
    
    const [num, setNum] = useState(0)



       const incNum =()=>{
 setNum(num + 10)
        
    }
    const decNum =()=>{
        setNum(num-10)
    }

    
  return (
    <div>
        {num}
        <button onClick={incNum} className={`btn ${num > 100 ? 'newBtn':''}`}> {num > 100 ? '+' : 'plus'} </button>
            <button onClick={decNum}>-</button>



    </div>
  )
}

export default StateTheory