const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

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

       // Assign IDs to the li elements so that it can be referenced later
            //    liElem.setAttribute('id', drink['idDrink'])
       liElem.setAttribute('id', drink['strDrink'])
        // liElemCounter.setAttribute('id', 'counter-'+ drink['idDrink'])
        liElemCounter.setAttribute('id', 'counter-'+ drink['strDrink'])
        

         // Set all Inner HTML to starting value
        liElemCounter.innerHTML = "    0"
       liElemButton.innerHTML = EMPTY_HEART
       // liElem.setAttribute('id', drink['idDrink'])
       liElem.innerHTML = drink["strDrink"]


      //Append the Button and Counter to the list
       liElem.appendChild(liElemButton)
       liElem.appendChild(liElemCounter)

       //Append the list elements to the bigger unordered list
       bigUL.appendChild(liElem)

       //Create the Ingredient List elements
       let divElem = document.createElement('div')
       let smallUL = document.createElement('ul')
    //    let ing1 = document.createElement('li')
    //    let ing2 = document.createElement('li')
    //    let ing3 = document.createElement('li')

    //Recreate the Ingredients so they are on one line
        let ingredients = document.createElement('li')
        //Set an ID for the new Ingredients
        ingredients.setAttribute('id', 'ingredients')
        //Set the InnerHTMl for the new ingredients list
        ingredients.innerHTML = "Made with " + `${drink['strIngredient1'] + ", " + drink['strIngredient2'] + ", " + drink['strIngredient3'] + ", " +
        drink['strIngredient4'] + ", " + drink['strIngredient5'] + ", " + drink['strIngredient6']}`
        //Append the new ingredients to the list 
        smallUL.appendChild(ingredients)


       //Set the Inner HTML of each ingredient equal to the first three ingredients of every drink
    //    ing1.innerHTML = drink['strIngredient1']
    //    ing2.innerHTML = drink['strIngredient2']
    //    ing3.innerHTML = drink['strIngredient3']

       //Append each ingredient to the list
    //    smallUL.appendChild(ing1)
    //    smallUL.appendChild(ing2)
    //    smallUL.appendChild(ing3)

       //Append the list to the Div and then append the div to the larger list
       divElem.appendChild(smallUL)
       bigUL.appendChild(divElem)

       //Create Mouseover Event Listener 
       liElem.addEventListener('mouseover', () => {
        document.querySelector('#image').src = drink["strDrinkThumb"];
    })
        //Create DoubleClick Event Listener
        liElem.addEventListener('dblclick', () => {
            document.querySelector('#marquee').innerHTML = drink["strInstructions"];
        })
        //Create Click Event Listener
        liElemButton.addEventListener('click', () => {
            if(liElemButton.innerHTML === EMPTY_HEART){
            liElemCounter.innerHTML = (parseInt(liElemCounter.innerHTML) + 1).toString()
            liElemButton.innerHTML = FULL_HEART
            } else {
            liElemCounter.innerHTML = (parseInt(liElemCounter.innerHTML) - 1).toString()
            liElemButton.innerHTML = EMPTY_HEART
            } 
        })     
                
   })
   document.body.appendChild(bigUL);
})

.catch(error => {
    alert(error)
})