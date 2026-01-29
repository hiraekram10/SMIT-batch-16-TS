import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Navbar = () => {


    // const arr = ["home","about","contact"]
    const products =[
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s',
            name:"bnana",
            price:80,

        },
         {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s',
            name:"apple",
            price:34,

        },
         {
               img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s',
            name:"orange",
            price:234,

        },
    ]
    // console.log(arr);
    var a = 10
    

  return (
<>
{/* <div>{a < 20 ? "true": "false"}</div> */}

{/* <ul>
    {arr.map((item,i)=>(
        <li key={i} >{item}</li>
    ))}
</ul> */}


<div style={{backgroundColor :'green', display:'flex',flexWrap :"wrap",gap:"10px"}}>
    {products.map((pro,i)=>(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pro.img} />
      <Card.Body>
        <Card.Title>{pro.name}</Card.Title>
       
        <Button variant="primary">{pro.price}</Button>
      </Card.Body>
    </Card>


        // <div className='bg' >
        //     <img src={pro.img} alt=""  style={{width:'100px',height:"100px"}}/>
        //     <p>{pro.name}</p>
        //     <h3>{pro.price}</h3>
        // </div>
    ))}
</div>

</>

   
  )
}

export default Navbar