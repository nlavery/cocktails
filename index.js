var apiResponse = {
    "drinks": [
       {
          "strDrink": "3-Mile Long Island Iced Tea",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg",
          "idDrink": "15300"
        },
        {
          "strDrink": "69 Special",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg",
          "idDrink": "13940"
        },
        {
          "strDrink": "A1",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
          "idDrink": "17222"
        },
        {
          "strDrink": "Abbey Cocktail",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyyuw1472811568.jpg",
          "idDrink": "17834"
        },
        {
          "strDrink": "Abbey Martini",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg",
          "idDrink": "17223"
        },
        {
          "strDrink": "Ace",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
          "idDrink": "17225"
        },
        {
          "strDrink": "Adam & Eve",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vfeumw1504819077.jpg",
          "idDrink": "17226"
        },
        {
          "strDrink": "Addison",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yzva7x1504820300.jpg",
          "idDrink": "17228"
        }
    ]
 };

var drinks = apiResponse.drinks;
var cocktailList = document.querySelector ('#cocktail-list');

for (var i = 0; i < drinks.length; i++) {
    var drink = drinks[i];
    let name = drink.strDrink;
    let imageUrl = drink.strDrinkThumb;
    let id = drink.idDrink;

    var cocktailCard = createCocktailCard (name, imageUrl, id);
    cocktailList.appendChild (cocktailCard);
}
function createCocktailCard (name, imageUrl, id) {
    var result = document.createElement ('div');
    result.classList.add ('card');
    
    var heading = document.createElement ('h3');
    heading.textContent = name;
    result.appendChild (heading);

    var image = document.createElement ('img');
    image.src = imageUrl;
    result.appendChild (image);

    return result;
}