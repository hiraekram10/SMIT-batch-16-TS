
// let fruits = [4,3,2]

// // ar ===> array iteration
// let retChck = fruits.map((elem, inde,ar)=>{
//     console.log(ar);
    
//   return elem * 6
 
// })
// console.log(retChck);


// return array modified


// 
//  let fruits = ['bnana','apple','orange','grapes']

//  let copyFruits = fruits
// copyFruits[2] = "mango"

//  console.log(copyFruits);
//  console.log(fruits);
 


//  let fruits = ['bnana','apple','orange','grapes']


// //  spread operator ... 
//  let copyFruits = [...fruits]
// copyFruits[0] = "mango"

//  console.log('copy',copyFruits);
//  console.log('orignal',fruits);


// shallow copy 

//  let fruits = ['bnana','apple','orange','grapes',[3,4]]


// //  spread operator ... 
// //  let copyFruits = [...fruits]   //x
// let copyFruits = JSON.parse(JSON.stringify(fruits))  //Deep copy
// copyFruits[4][0] = 13

//  console.log('copy',copyFruits);
//  console.log('orignal',fruits);

// shallow copy
// let ob = {
//     userName: 'hira',
//     email:'hira@gmail.com'
// }


// let copyObj = {...ob}

// ob.userName = 'iqra'
// console.log(ob);
// console.log(copyObj);



// let ob = {
//     userName: 'hira',
//     email:'hira@gmail.com',
//     personalInfo :{
//    num : 2378564
//     }
// }

// // deep copy
// let copyObj = JSON.parse(JSON.stringify(ob))

// ob.personalInfo.num = 8345
// console.log(ob);
// console.log(copyObj);




let arr1 = [2,4]
let arr2 = [2,'user1',...arr1]
console.log(arr2);



// let ob1 = {
//     userName: 'hira',
//     email:'hira@gmail.com',
   
// }
//  let personalInfo = {
//    num : 2378564
//     }

// let newObj = {...ob1 ,...personalInfo}  //
// console.log(newObj);




// let ob1 = {
//     userName: 'hira',
//     email:'hira@gmail.com',
   
// }
// Destructuring


// let {email,userName}    = ob1


// let {email: userEmail,userName}    = ob1   //(rename property using des)
// console.log(userEmail);

// default value
// const { occupation = "unemployed" } = person;
// console.log(occupation);




let ob1 = {
    userName: 'hira',
    email:'hira@gmail.com',
   persnalInf :{
    address:'823756 cfbn',
    nom :934578934
   }
}

// let {userName,persnalInf :{address,nom},email} = ob1
// console.log(nom);




// let {userName,persnalInf }= ob1
// let {address,nom} = persnalInf











 
 



