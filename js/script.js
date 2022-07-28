fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(data => {

    //Create the other UL 
    let bigUL = document.createElement("ul")
    //Iterare through the array drinks and create a new li element, button, and counter for each drink type
    data.drinks.forEach(drink => {
        let liElem = document.createElement("li");
        let liElemButton = document.createElement("button");
        let liElemCounter = document.createElement("span");
        
        // Assign an ID to the counter so that it can be reference earlier
        liElemCounter.setAttribute('id', 'counter-'+ drink['idDrink'])
        
        // Set all Inner HTML to starting value
        liElemCounter.innerHTML = " 0"
        liElemButton.innerHTML = "Like"
        liElem.innerHTML = drink["strDrink"]
        

        liElem.setAttribute('id', drink['idDrink'])
        liElem.appendChild(liElemButton)
        liElem.appendChild(liElemCounter)
       
        bigUL.appendChild(liElem)
    
        let smallUL = document.createElement('ul')
        let ing1 = document.createElement('li')
        let ing2 = document.createElement('li')
        let ing3 = document.createElement('li')
        ing1.innerHTML = drink['strIngredient1']
        ing2.innerHTML = drink['strIngredient2']
        ing3.innerHTML = drink['strIngredient3']
        smallUL.appendChild(ing1)
        smallUL.appendChild(ing2)
        smallUL.appendChild(ing3)
        bigUL.appendChild(smallUL)
        liElem.addEventListener('mouseover', () => {
            document.querySelector('#image').src = drink["strDrinkThumb"];
        })
        liElem.addEventListener('dblclick', () => {
            document.querySelector('#marquee').innerHTML = drink["strInstructions"];
        })
        liElemButton.addEventListener('click', () => {
            liElemCounter.innerHTML = (parseInt(liElemCounter.innerHTML) + 1).toString()
        })
    })

   

    document.body.appendChild(bigUL);

});



