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
       liElem.setAttribute('id', drink['idDrink'])
        liElemCounter.setAttribute('id', 'counter-'+ drink['idDrink'])

         // Set all Inner HTML to starting value
        liElemCounter.innerHTML = "    0"
       liElemButton.innerHTML = EMPTY_HEART
       liElem.innerHTML = drink['idDrink']


      //Append the Button and Counter to the list
       liElem.appendChild(liElemButton)
       liElem.appendChild(liElemCounter)

       //Append the list elements to the bigger unordered list
       bigUL.appendChild(liElem)

       //Create the Ingredient List elements
       let divElem = document.createElement('div')
       let smallUL = document.createElement('ul')
       let ing1 = document.createElement('li')
       let ing2 = document.createElement('li')
       let ing3 = document.createElement('li')


       //Set the Inner HTML of each ingredient equal to the first three ingredients of every drink
       ing1.innerHTML = drink['strIngredient1']
       ing2.innerHTML = drink['strIngredient2']
       ing3.innerHTML = drink['strIngredient3']

       //Append each ingredient to the list
       smallUL.appendChild(ing1)
       smallUL.appendChild(ing2)
       smallUL.appendChild(ing3)

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
            liElemCounter.innerHTML = (parseInt(liElemCounter.innerHTML) + 1).toString()
            liElemButton.innerHTML = FULL_HEART
        })
                
   })
})