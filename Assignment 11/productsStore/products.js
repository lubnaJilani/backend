// let loading = document.getElementById("loading")
// let error = document.getElementById("error")
// let products= document.getElementById("products") 
// const API = 'https://dummyjson.com/products'

// fetch(API) 
// .then(reponse=>{
//     console.log(reponse)
//     console.log(reponse.status) 
// if(!reponse.ok){
//     throw new error('error new API ' , reponse.status)
// }

//     return reponse.json()
// })
// .then(data=>{
//     console.log( 'All Data',data)
//     console.log("products",data.products)
//     console.log("First product brand:", data.products[0].brand)

//     loading.textContent = "Products loaded successfully!";

// }) 
// .catch(error =>{ 
//     console.log("Fetch error:", error)
//         error.textContent = "Error: " + err.message;
//     loading.textContent = "";
// }) 




let loading = document.getElementById("loading");
let error = document.getElementById("error");
let products = document.getElementById("products");

const API = "https://dummyjson.com/products";

loading.textContent = "Loading products...";

fetch(API)
  .then(response => {
    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  })
  .then(data => {
    loading.textContent = "";
    products.innerHTML = "";

    console.log("First product brand:", data.products[0].brand);

    data.products.slice(0, 6).forEach(product => {
      const card = document.createElement("div");

      const title = document.createElement("h2");
      title.textContent = product.title;

      const brand = document.createElement("p");
      brand.textContent = "Brand: " + (product.brand || "Not available");

      const price = document.createElement("p");
      price.textContent = "Price: $" + product.price;

      const image = document.createElement("img");
      image.src = product.thumbnail;
      image.alt = product.title;
      image.width = 150;

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(brand);
      card.appendChild(price);

      products.appendChild(card);
    });
  })
  .catch(err => {
    loading.textContent = "";
    error.textContent = "Error: " + err.message;
    console.error(err);
  });
