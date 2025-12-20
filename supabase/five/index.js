import supabase from './config.js'

let userName = document.getElementById('name')
let email = document.getElementById('exampleInputEmail1')
let password = document.getElementById('exampleInputPassword1')
let signupForm = document.getElementById('myForm')

async function register(e){
  e.preventDefault()
  console.log(email.value , password.value);
  if(!email.value){
    alert('plz fill your email');
    
    return
  }
  //supabase code added here
  try {
    const { data, error } = await supabase.auth.signUp({
  email: email.value,
  password: password.value,
  options:{
    data:{
        userName :userName.value,
             role:'user'
    }
  }
})

if(data){
    console.log('user ka data----->',data);
    // location.href = 'profile.html'
    email.value = ''
    password.value = ''
     let {id,user_metadata} = data.user
  const { error } = await supabase
  .from('users')
  .insert({ username: user_metadata.userName, email: user_metadata.email ,userId :id ,role:user_metadata.role })
  if(error){
    console.log(error);
    
  }else{
    console.log('user created successfully');
    window.location.href = 'profile.html'
    
  }

    
}
  } catch (error) {
    console.log(error);
    
  }
  
  
}
signupForm && signupForm.addEventListener('submit',register)


// _____________________Login )________________________________________


let lemail = document.getElementById('exampleInputEmail')
let lpassword = document.getElementById('exampleInputPassword')
let LoginForm = document.getElementById('loginForm')


async function login (e){
  e.preventDefault()
  console.log(lemail.value,lpassword.value);
  try{
    const { data, error } = await supabase.auth.signInWithPassword({
  email: lemail.value,
  password: lpassword.value,
})
if(data){
  console.log(data);
 
  
}

  }catch(err){
    console.log(err);
    
  }
}

 LoginForm && LoginForm.addEventListener('submit',login)


//  ______________________________Profile

let name = document.getElementById('name')
async function Profile(params) {
  const { data, error } = await supabase.auth.getUser()

  name.innerHTML = data.user.user_metadata.userName
  
}

Profile()


let btn = document.getElementById('btn')
btn.addEventListener('click',async function(){
    const { error } = await supabase.auth.signOut()
    if(error){
   console.log(error.message);
   
    }else{
      location.href = 'index.html'
    }
})

