import supabase from "./config.js";


let img = document.getElementById('img')
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
    const { data : urlData } = supabase
  .storage
  .from('images')
  .getPublicUrl(picName)
    

  if(urlData){
    console.log(urlData);
       console.log(urlData.publicUrl);
       const { error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Mordor' })
    
  }
 }else{
    console.log(error);
    
 }
    
 }



uploadBtn.addEventListener('click',uploadMYfILE)
