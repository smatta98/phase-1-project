fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(data => {
   console.log(data)
   
   //Create the other UL
   let bigUL = document.createElement("ul")
   //Iterare through the array drinks and create a new li element, button, and counter for each drink type
   data.drinks.forEach(drink => {
       let liElem = document.createElement("li");
       let liElemButton = document.createElement("button");
       let liElemCounter = document.createElement("span");
   })
})