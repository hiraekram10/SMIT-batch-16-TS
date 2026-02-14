import React, { useState } from 'react'
import supbase from '../config/supbase'


const MyForm = () => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

    const handleSubmit =async (a)=>{
        a.preventDefault()
        console.log(email , password);
        const { data, error } = await supbase.auth.signInWithPassword({
  email: email,
  password: password,
})
if(data){
    alert('dataadded')
    console.log(data);
    
}
        
    }


  return (
    <main class="login-card">
    <div class="card shadow-sm">
        <div class="card-body p-4">
            <div class="text-center mb-4">
                <h2 class="fw-bold">Sign In</h2>
                <p class="text-muted">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit}>
           
                <div class="form-floating mb-3">
                    <input type="email"
                    value={email}
                    onChange={(e)=>{
                        console.log(e.target.value)
                        
                        setEmail(e.target.value)
                    }}
                     class="form-control" id="emailInput" placeholder="name@example.com" required/>
                    <label for="emailInput">Email address</label>
                </div>

              
                <div class="form-floating mb-3">
                    <input type="password" 
                    value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    class="form-control" id="passwordInput" placeholder="Password" required/>
                    <label for="passwordInput">Password</label>
                </div>

              
                <div class="d-flex justify-content-between align-items-center mb-4">
                 
                    <a href="#" class="text-decoration-none small">Forgot password?</a>
                </div>

              
                <button class="btn btn-primary w-100 py-2 mb-3" type="submit">Sign In</button>

                
                <div class="text-center">
                    <span class="small text-muted">Don't have an account?</span>
                    <a href="#" class="small text-decoration-none fw-bold">Sign up</a>
                </div>
            </form>
        </div>
    </div>
</main>
  )
}

export default MyForm