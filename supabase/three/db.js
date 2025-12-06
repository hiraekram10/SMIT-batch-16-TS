import supabase from './config.js'

let title = document.getElementById('title')
let desc = document.getElementById('description')
let btn = document.getElementById('btn')
let prior = document.getElementsByName('priority')
let main = document.getElementById('main')



async function addTodo(e){
    e.preventDefault()
    let selectedPrio;
    console.log(title.value,desc.value);
    for(var p of prior){
        if(p.checked){
            selectedPrio = p.value
            
        }
        
    }
    try{
   const { error } = await supabase
  .from('todos')
  .insert({ title: title.value, status: selectedPrio,description:desc.value  })
  if(error){
    console.log(error)
  }

    }catch(er){
        console.log(er);
        
    }

    
    
    
}

btn.addEventListener('submit',addTodo)

async function allTodos() {
    
    try{
const { data, error } = await supabase
  .from('todos')
  .select('*')
//   .eq('id', '4') filter 
  if(data){
    
    showAllTodos(data)
    
  }else{
    
  }
    }catch(er){
console.log(er);

    }
}
allTodos()
async function showAllTodos(todos){
    todos.forEach(todo => {
       main.innerHTML += `<div class="card">
  <div class="card-body">
    ${todo.title}
  </div>
   <div class="card-body">
    ${todo.status}
  </div>
   <div class="card-body">
    ${todo.description}
  </div>
</div>` 
         
    });

 
}