// let getProducts = fetch('https://fakestoreapi.com/products')
// getProducts.then(res =>res.json())
// .then(res =>console.log(res))
// .catch(err =>console.log(err))

// async /await


let main = document.querySelector("#main")

async function getProduct (){
  let response =await fetch('https://fakestoreapi.com/products')
  let data =await response.json()
   return showProducts(data)
  
}
getProduct()


function showProducts(d){
  console.log(d);
  d.forEach(prodcut => {
  
    main.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${prodcut.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prodcut.title}</h5>
    <p class="card-text">${prodcut.description}</p>
    <a href="#" class="btn btn-primary" onclick="detailFunc(${prodcut.id})">to detail page</a>
  </div>
</div>`
  });
  
}


async function detailFunc(id){
  location.href = 'Dertail.html'
  let response =await fetch(`https://fakestoreapi.com/products/${id}`)
   let data =await response.json()
   console.log(data);
   

  
}