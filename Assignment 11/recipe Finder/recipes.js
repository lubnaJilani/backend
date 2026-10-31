let load = document.getElementById("loading")
let error = document.getElementById("error")
let recipesContainer = document.getElementById("recipes");

fetch(" https://dummyjson.com/recipes")
.then(resolve =>{
    console.log(resolve)
    if(!resolve.ok){
        throw new  Error("error");
        
    }
    return resolve.json()
})
.then(data=>{
    console.log(data)
    console.log(data.recipes) 
load.textContent= "";
data.recipes.slice(0,6).forEach(recipe => {
    const card =document.createElement("div")
    card.classList.add("recipe-card")

    const image = document.createElement('img')
    image.src = recipe.image;
      image.alt = recipe.name; 

       const title = document.createElement("h2");
      title.textContent = recipe.name;


      const cuisine = document.createElement('p')
      cuisine.textContent = "cuisine  : "+ recipe.cuisine


      const rating = document.createElement('p')
      rating.textContent = "Rating  : " +recipe.rating
card.append(image ,title,cuisine,rating) 
 recipesContainer.appendChild(card);
    
});


}).catch(err=>{
    console.log("Erroe",err)
})