// var btn = document.getElementById('btn')
// var userTodo = document.getElementById('todo')
// var AllTodos = document.getElementById('todos')
// var Alldlt = document.getElementById('dltAll')

// btn.addEventListener('click',function (){
//     AllTodos.innerHTML += `<li><span> ${userTodo.value}</span><button onclick='edtFunc(this)'>Edit</button><button onclick='dltFunc(this)'>Delete</button></li>`
//     userTodo.value = ''
      
// })

// function dltFunc(a){
   
//    a.parentNode.remove()
   
// }

// function edtFunc(b){
//      b.innerHTML= 'update'
//  var oldTxt = b.parentNode.firstChild.innerText
//  var newText = prompt('enter your new todo',oldTxt)
//   b.parentNode.firstChild.innerText = newText
   
// }
// Alldlt.addEventListener('click',function(){
//     AllTodos.innerHTML =''
// })

//_____________________________Todos code end___________________________________

// ["hi","hello","salam"].includes("sal")  true ye false



// var student2 = {
//     fullname:'user',
//     no:283746,
//     email:'user@gmail.com',
//    getName : function (){
//      console.log(this.fullname+ "your email is" + this.email);
     
       
//    }   
//    }

//    student2.getName()
//    console.log(student2);


//     function Animal(name,no) {
//       this.name = name;
//       this.no = no
      
      
//     }

//     Animal.prototype.sayName = function() {
//       console.log(`My name is ${this.name}`);
//     };
//     Animal.prototype.legs = true

//     const dog = new Animal("Buddy",2334);
//         const cat = new Animal("pinki",3545);
//           const monkey = new Animal("rainbow",345);
//    console.log(dog);
//       console.log(cat);
//          console.log(monkey);
//          cat.sayName()




    //      function Animal(name,no) {
    //   this.name = name;
    //   this.no = no;
    //   this.sayName = function() {
    //   console.log(`My name is ${this.name}`);
    // };
      
      
    // }



    // const dog = new Animal("Buddy",2334);
    //     const cat = new Animal("pinki",3545);
    //       const monkey = new Animal("rainbow",345);

    
// var student2 = {
//     fullname:'user',
//     no:283746,
//     email:'user@gmail.com',
  
//    }

//    console.log('emai' in student2);


var student2 = {
    fullname:'user',
    no:283746,
    email:'user@gmail.com',
  
   }
//    console.log(student2['no']);
   
   for(var key in student2){
    console.log(student2[key]);
    
   }
   




  
   
   

       
   