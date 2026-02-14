import React, { useEffect, useState } from 'react'
import supbase from '../config/supbase'

const Cards = () => {
 
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])
    const getData = async() => {
        try {
            const { data, error } = await supbase
  .from('Product')
  .select('*')
  console.log(data);
  setProduct(data)
  setLoader(false)
  

        } catch (error) {
            console.log(error);
            
        }
            
    }



    useEffect(() => {
        // first time (on component render)
        getData()
    }, [])

   


    return (
        <>
           


            <div>
                {
                    loader ? 'loading' : (
                        <div>
                            {product.map((p) => (
                                <div>
                                    <h1>{p.name}</h1>
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