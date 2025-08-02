// logical operators


// && ______________logical and operator (stops at first false / continue till last true )
// || (or)   logical or operator   (stops at first truthy value  / continue till last false)
// !      logical not



// if(3 < 5  &&  5 == 5){
//     console.log('true');

// }else{
//     console.log('false');

// }



// if(3 < 5  &&  5 === '5'){
//     console.log('true');

// }else{
//     console.log('false');

// }


// console.log(5 == 5 && 6 < 7 && 0 && "true" && false );   
// console.log(5 == 5 && 6 < 7 && true && "true" && "sana" ); //sana


// console.log(5 < 11 && 8 % 2 == 0);  //true

// console.log("iqra" || 1);


//  < >=   == true / false



// console.log(0 || "" || undefined  || -0 || 3 < 2);




// !true  =====> false
// !false ====> true


// if(!(5 < 7)){
//     console.log("hi");

// }else{
//     console.log("hello");

// }

// var userEmail = prompt("ENTER YOUR EMAIL")
// var userPassword = prompt("ENTER YOUR pass")
// var userName = prompt("enter your name")

// if(userEmail === 'hira@gmail.com' || userName === "hira"  && userPassword == 12345){
//     console.log('you are logged in');

// }else{
//     console.log('authentication error');

// }

// var percentage = +prompt("number")
// if (percentage <= 100 && percentage >= 40) {
//     if (percentage >= 80){
//         console.log("a+");
        
//     }
//     else if(percentage >= 70){
//          console.log("a");
//     }
//     else{
//         console.log('fail');
        
//     }



//     } else {
//     console.log('invalid');

// }


// document.write('<table class="bg">'+
//         "<tr>" +
//             "<td>" +"name" +"</td>"+
//             "<td>" + "class" +"</td>"+
//             "<td>" + percentage +" </td>"+
//        " </tr>"+
//   "  </table>")



/*var fruits = ["bnana","apple","pineapple"]

// console.log(fruits.length); // to check no of values

// position ------> always starts from 0 (index)

console.log(fruits[1])  //apple
   

// console.log(fruits[3]); // undefined

fruits[1] ="orange"
fruits[3] = "strawberry"

console.log(fruits);








