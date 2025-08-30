// var numb = "aaaa";
// // // console.log(parseInt(numb)) // parse int number main covert whole number
// console.log(parseFloat(numb))  //Nan 


// var num = 2.378468
// // console.log(num.toString());
// // console.log(num.toFixed());
// var input = document.getElementById('inp')


// function add(){
//    var alph = 'abcdefghijklmnopqrstuvwxyz'
// var result = alph[Math.floor(Math.random() *26)]

// input.style.backgroundColor = 'red'

// // input.value += result
// if(input.checked == true){
//     console.log('good');
    
// }
// else{
//     console.log('plz fill form');
    
// }

    
// }
// for(var i = 0; i < alph.length;i++){
//     console.log(alph[i]);
    
// }

// var nowdate = new Date()
// var stringDate = nowdate.toString()
// var weekDays = ['sun','mon','tues','wed','thurs']
// var day = nowdate.getDay()
// console.log(weekDays[day]);


// var monName = ['jan','feb','march','apr','may','jun','jul','aug']
// var day = nowdate.getMonth()   //0 jan  -- dec--11
// console.log(monName[day]);


// var year = nowdate.getFullYear()
// console.log(year);



// var hour = nowdate.getHours()  // 0 is 12 midnight 11-- 23
// console.log(hour);


// var min = nowdate.getMinutes()
// console.log(min);


// var sec = nowdate.getSeconds()
// console.log(sec);


var nowdate = new Date()
var birthday = new Date("November 10, 2025")
// console.log(birthday);

var time = nowdate.getTime()
var bt = birthday.getTime()
var diff = bt - time
console.log(Math.round(diff/(1000 * 60 * 60 *24)));




























