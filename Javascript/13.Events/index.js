// var idGet = document.getElementById('one')
// console.log(idGet);


// var paraGet = document.getElementsByClassName('para')
// console.log(paraGet);    //[]


// var paraGet = document.getElementsByTagName('input')
// console.log(paraGet);  


// var paraGet = document.querySelector('input')
// console.log(paraGet);  


// var paraGet = document.querySelectorAll('.para')
// console.log(paraGet);   []


// var email = document.querySelector('#email')
// var box = document.querySelector('#text')

// function val(){
//   if(email.value.length == 0){
//     email.style.backgroundColor = 'red'
//     email.focus()
//     box.style.display="block"
//     box.innerHTML = "please add email "
    
//   }else if(email.value.indexOf('@') === -1){
//      email.style.backgroundColor = 'red'
//     email.focus()
//     box.style.display="block"
//     box.innerHTML = "please enter valid email "

//   }else{
//         box.style.display="block"
//     box.innerHTML = "submitted "
//          email.style.backgroundColor = 'white'
//   }
//   email.value = ''
  
// }



// var pass = document.querySelector('#pass')
// var box = document.querySelector('#checkBox')
// var email = document.querySelector('#email')
// var username = document.querySelector('#username')

// function val(){
// if(box.checked){
//   pass.type = 'text'

// }else{
//   pass.type = 'password'   
// }

    
// }

// function logIn(){

   
//   window.location.href = 'welcome.html'
  
// }
 


// function modes(){
//     var clasDiv = document.getElementById('main')
  
//
//     clasDiv.className += ' dark'
//    

  
  
 
// }


// function modes(){
//     var clasDiv = document.getElementById('main')
//    var  ixcon = document.getElementById('ixcon')
  
// //   console.log(clasDiv.classList);//[2 classes]
// // console.log(clasDiv.className.includes('light'))
// if(clasDiv.className.includes('light')){
//     clasDiv.className += ' dark'
//     clasDiv.classList.remove('light')
//     ixcon.className = 'fa-regular fa-moon'
//       ixcon.classList.remove('fa-solid')
// }else{
//     clasDiv.classList.remove('dark')
//       clasDiv.className += ' light'
//         ixcon.className = 'fa-solid fa-moon'
//       ixcon.classList.remove('fa-regular')
// }
  
 
 
// }
  var ul = document.getElementById('main')
    var task = document.getElementById('task')
 function val (){
  ul.innerHTML +='<li>' + task.value +'</li>'
  task.value = ''
 }


