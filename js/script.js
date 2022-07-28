fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(data => {

    let bigUL = document.createElement("ul")
  
    data.drinks.forEach(drink => {
        let liElem = document.createElement("li");
        let liElemButton = document.createElement("button");
        let liElemCounter = document.createElement("span");
        
        liElemCounter.setAttribute('id', 'counter-'+ drink['idDrink'])
        
        // Set all Inner
        liElemCounter.innerHTML = "0"
        liElemButton.innerHTML = "Upvote"
        
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


