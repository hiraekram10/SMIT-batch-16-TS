// -- optional chaining
// let obj = {
//     userName: 'hira',
//     email:'hira@gmail.com',
//     personalInfo :{
//    num : 2378564
//     }
// }
// console.log(obj.personsal?.num);



// callback
// a function passed into another function as an argument, 
// with the expectation that it will be invoked (called back) later, 
// typically to complete a specific task, handle an event, or manage an asynchronous operation

// function callBackk (name){
//   console.log('hi');
  
// }


// function parentFunc (a){
//    a('iqra')
    
// }


// parentFunc(callBackk)



// setTimeout(callBackk,3000)


// Takes one or more functions as arguments. These functions 
// passed as arguments are often referred to as "callback functions."
// Returns a function as its result. This creates a "function factory"
//  where the outer function generates and returns a new, specialized functio
// function add(no) {
//    return function (no2){
//       return no + no2
//    }
// }


// let check = add(2)  // f(){
// //                   return 1
// //                    }
// console.log(   check(4)   );


// let myFunction = function(){
//     console.log('hi');
    
// }

// myFunction()


// clousure
//In simpler terms, a closure allows an inner function to access the variables and 
// parameters of its outer function, even after the outer function has finished executing
// function add(no) {
//     var i = 10
//     function hello (no2){
//        console.log(i);
       
//    }
//    hello()
// }

// add(3)

// console.log('hi');
// console.log('hi2');
// setTimeout(()=>{
//     console.log('hi3');
    
// },3000)
// console.log('hi4');

// sync --- Async



// Promise----------- (async code handling)
// status 
// pending
// fullfil(resolve)
// reject


// let myPromise = new Promise((resolve,reject)=>{
//    var pass = 8236
//     if(pass === 8236){
//    resolve('promise full')
//     }else{
//    reject('promise rejected')
//     }
 
// })


// myPromise.then(res => console.log("res",res))
// .catch(err=> console.log('rej',err))


// Api (application programming interface)


//frontent (req) --->   api (http{data} ) req ----> server (process) 
//frontent (res) <---api (https{data} ) response <---- server (comple) 


// get Retrieves data from the server.
// post  Submits data to be processed to a specified resource
// put Applies partial modifications to a resource
// DELETE   dlt data 


//   cod 200 ok


let getProducts = fetch('https://fakestoreapi.com/products')
getProducts.then(res =>res.json())
.then(res =>console.log(res))
.catch(err =>console.log(err))













