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

       // Assign IDs to the LI elements so that it can be referenced later
       liElem.setAttribute('id', drink['idDrink'])
        liElemCounter.setAttribute('id', 'counter-'+ drink['idDrink'])

         // Set all Inner HTML to starting value
        liElemCounter.innerHTML = "    0"
       liElemButton.innerHTML = EMPTY_HEART
       liElem.innerHTML = drink['idDrink']


      //Append the Button and Counter to the list
       liElem.appendChild(liElemButton)
       liElem.appendChild(liElemCounter)

       //Append the list to the Master list
       bigUL.appendChild(liElem)

   })
})