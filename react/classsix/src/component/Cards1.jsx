import React, { useEffect, useState } from 'react'
import supbase from '../config/supbase'

const Cards = () => {
    // const [num,setNum] = useState(0)
    //     const [name,setName] = useState('iqra')
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])
    const getData = () => {
        const response = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => {
                (setProduct(json))
                setLoader(false)



            }
            )
    }



    useEffect(() => {
        // first time (on component render)
        getData()
    }, [])

    // useEffect(()=>{ 
    //  getData()
    // })


    // useEffect(()=>{ 
    //  getData()
    // },[name,num])


    return (
        <>
            {/* <div>{num}</div>
    <button onClick={()=>setNum(num + 1)}>+</button>
<div>{name}</div>
    <button onClick={()=>setName('hira')}>name</button> */}


            <div>
                {
                    loader ? 'loading' : (
                        <div>
                            {product.map((p) => (
                                <div>
                                    <h1>{p.title}</h1>
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>
        </>

    )
}

export default Cards