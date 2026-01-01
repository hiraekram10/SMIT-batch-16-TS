
import supabase from "../config.js";

async function checkRole(params) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    alert("create your account");
    return (window.location.href = "../login.html");
  }
  try {
    const { data: profile, error } = await supabase
      .from("users")
      .select("role")
      .eq("userId", user.id)
      .single();
    console.log(profile);

    if (profile.role != "admin") {
      alert("access denied");
      return (window.location.href = "../profile.html");
    }
  } catch (err) {
    console.log(err);
  }
}

checkRole();

let colorsGroup = document.getElementById("colorsGroup");
let addColors = document.getElementById("addColors");
let _addProduct = document.getElementById('addProduct')
let pname = document.getElementById('pname')
let pprice = document.getElementById('pprice')
let pcategory = document.getElementById('pcategory')
let pdesc = document.getElementById('pdesc')
let pimage = document.getElementById('pimage')

addColors && addColors.addEventListener("click", () => {
  let div = document.createElement("div");
  div.innerHTML = ` <input type="color" name="" class="colorsInp" >
    <p  class="removeColor">X</p>

    `;
  colorsGroup.appendChild(div);

  div.querySelector(".removeColor").addEventListener("click", () => {
    div.remove();
  });
});
let imageUrl;
async function uploadFile(f) {
  try {
    let fileName = Date.now() + "-" + f.name;
    const { data, error } = await supabase.storage
      .from("products")
      .upload(fileName, f);
    if (data) {
      const { data: urlData } = supabase.storage
        .from("products")
        .getPublicUrl(data.path);
      if (urlData) {
        imageUrl = urlData.publicUrl;
        return imageUrl
      } else {
        console.log("error in getting url");
      }
    }else{
        console.log('error in uploading');
        
    }
  } catch (error) {
    console.log(error);
  }
  
}

async function addProduct(e) {
    e.preventDefault()
   let colorsArr = []
   let colorsInp = document.querySelectorAll('.colorsInp')
   console.log(colorsInp);
   colorsInp.forEach(color=>{
      console.log(color.value);
      colorsArr.push(color.value.trim())
      
   })
   console.log(colorsArr);
   
    console.log(pimage.files[0]);
    let uploadFunc = await uploadFile(pimage.files[0])
    try {
        const { error } = await supabase
  .from('products')
  .insert({
    name: pname.value, 
    category: pcategory.value,
    price:pprice.value,
    desc:pdesc.value,
    colors:colorsArr,
    imgUrl:uploadFunc
})
if(error){
    console.log(error);
    
}else{
    console.log('added successfully');
    
}
    } catch (error) {
        
    }
    
}

_addProduct && _addProduct.addEventListener('submit',addProduct)

// function add (a){
//     let adding = a +10
//     return adding
// }

// let retCh = add(20)
// console.log(retCh);

let allProd = document.getElementById('allProd')

async function showAllProduct(params) {
  try{
    const { data, error } = await supabase
  .from('products')
  .select('*')
  if(data){
  data.forEach((product,index)=>{
    console.log(product);
    allProd.innerHTML +=`<div class="card" style="width: 18rem;">
  <img src="${product.imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
   
      <p class="card-text">${product.category}</p>
    <button class="btn btn-primary" onclick="window.location.href='DetailProd.html?id=${product.id}'">view Details</button>
  </div>
   
    <button class="btn btn-primary" onclick="edtPost(${product.id})" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>

</div>`
    
  })
    
  }else{
    console.log(error);
    
  }
  }catch(error){
    console.log(error);
    
  }
}


showAllProduct()
let ecolorsGroup = document.getElementById("colorsGroup");
let eaddColors = document.getElementById("addColors");
let _eaddProduct = document.getElementById('addProduct')
let epname = document.getElementById('pname')
let epprice = document.getElementById('pprice')
let epcategory = document.getElementById('pcategory')
let epdesc = document.getElementById('pdesc')
let epimage = document.getElementById('pimage')

window.edtPost= async function(pId){
  const { data,error } = await supabase
  .from('products')
  .select('*')
  .eq('id',pId)
  .single()

  if(data){
    console.log(data);
    
  epname.value = data.name
  epprice.value = data.price
  epcategory.value = data.category
  epdesc.value = data.desc
   data.colors.forEach((clr)=>{
let colorDiv = document.createElement("div")
colorDiv.innerHTML =`<input type="color" name="" class="colorsInp" value="${clr}">
    <p  class="removeColor">X</p>
`

  colorsGroup.appendChild(colorDiv);

  colorDiv.querySelector(".removeColor").addEventListener("click", () => {
    colorDiv.remove();
  });

 
   })
    
  }
  
  
}







let main = document.getElementById('main')
let total = document.getElementById('total')

function renderCartiItems (){
   let cart = JSON.parse(localStorage.getItem('cart')) || []
   let t = 0
   main.innerHTML =""
  cart.forEach((el,index)=>{
    t += el.price * el.quantity
    main.innerHTML +=`<div class="card">
    <div class="row">
  <img  src="${el.imgUrl}" class="card-img-left col-4" alt="...">
  <div class="card-body col-4">
    <h5 class="card-title">${el.name}</h5>
    <p class="card-text">${el.price}</p>
  </div>
<div class="card-body col-4 d-flex align-items-center">
<button onclick="updateQuan(${index},1)">+</button>
                  <p>${el.quantity}</p>
                  <button onclick="updateQuan(${index},-1)">-</button>
</div>
  </div>

 
</div>`
  })
   total.innerHTML = `<div>${t}</div>`
}

renderCartiItems ()
 

window.updateQuan = function (index,operand){
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  console.log(index,operand);
  cart[index].quantity +=operand
  if(cart[index].quantity <=0){
   cart.splice(index,1) 
  }




localStorage.setItem('cart',JSON.stringify(cart))
  renderCartiItems ()
}

