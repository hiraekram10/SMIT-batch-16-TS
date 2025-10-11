// console.log(i); undefined

// console.log(num);



// var i = 10  //hoisted
// let num = 7   
// Instead, they are placed in a "Temporal Dead Zone" (TDZ) 
// from the beginning of their scope until their declaration line



// function myName (){  //declaration  hoisted
//   return "hira"
    
// }

// var myName;

//  console.log(myName());  
// // function expression 
// var myName = function (){  //declaration
//   return "hira"
    
// }

// arrow function
// var change =  ()=>{  
//  console.log('hira');
 
    
// }
// change()


// var change =  (name,rollNo)=>console.log(`${name} your roll no is ${rollNo}`);  
 
 
    
// change("ali",8723)

// var change =  name=>console.log(name);  
 

// change("ali",8723)

 
// const mynum2 = a =>  {
//     console.log('hi');
    
//    return a * 2
// }
// //es6
// const mynum = a =>  a * 2

// console.log(mynum(10));


// function a (num1, num2)  {
//     // console.log(arguments); [10,20]
//     console.log(arguments.length);
    
    

// }
// a(10,20)
// const  a = (num1, num2) => {
//     // console.log(arguments); [10,20]
//     // console.log(arguments);  is not defined
    
    

// }
// a(10,20)

// Default parameter

// function a (num1, num2 = 0)  {
   
//     console.log(num1 * num2);
    
    

// }
// a(10,20)  //200
// a(10) //0 deafult value

// Rest paramenter
// function a (name,num, ...arr )  {
   
//     console.log(arr);
    
    

// }
// a('hira',20,30)  


let fruits = [4,3,2]
let retChck = fruits.map((elem, inde)=>{
  return elem * 6
 
})
console.log(retChck);
















