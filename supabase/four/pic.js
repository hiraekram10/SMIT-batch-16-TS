import supabase from "./config.js";


let img = document.getElementById('img')
let main = document.getElementById('main')
let picName;
let uploadBtn = document.getElementById('uploadBtn')
 async function uploadMYfILE() {


    // files kliye input.files (return data in array form uske 0 index p file wala object)
    let fileName = img.files[0].name

    let file = img.files[0]
const { data, error } = await supabase
  .storage
  .from('images')
  .upload(fileName, file)

   if(data){
    picName = data.path
   
   const { data:urlData } = supabase
  .storage
  .from('images')
  .getPublicUrl(picName)
  
    if(urlData){
      console.log('public url obj --->',urlData);
       console.log('public url --->',urlData.publicUrl);
       const { error } = await supabase
  .from('pics')
  .insert({ imageUrl:urlData.publicUrl})
      
    }
    if(error){
      console.log(error);
      
    }else{
      console.log('pic created successfully');
      
    }
    

 }else{
    console.log(error);
    
 }
    
 }



uploadBtn.addEventListener('click',uploadMYfILE)

async function getAllPics (){
  try {
   const { data, error } = await supabase
  .from('pics')
  .select('*')
  if(data){
   console.log(data);
   data.forEach(pic => {
      main.innerHTML +=`<div><img src='${pic.imageUrl}'></div>`
      
   });
   
  }
   
  } catch (error) {
   console.log(error);
   
  }
}

getAllPics()
