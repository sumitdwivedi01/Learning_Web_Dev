// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/sumit")
// .then(response=>console.log(response =>{
//     if(!response.ok){
//         throw new Error("could not fetch resourse");
//     }
//     return response.json();
// }))
// // .then(resolve => resolve.json())
// .then(data => console.log(data.id))
// .catch(error => console.log(error));

//if the promise inside fetch is resolved then this will return a ok with a true value other wise ok will have false value
//to catch the error we can use that like catching error with that
// fetchdata();
function getRandomPokemon() {
    const pokemonList = [
        "Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Jigglypuff", 
        "Eevee", "Snorlax", "Gengar", "Mewtwo", "Lucario",
        "Charizard", "Gyarados", "Dragonite", "Machamp", "Alakazam",
        "Lapras", "Vaporeon", "Jolteon", "Flareon", "Umbreon",
        "Espeon", "Sylveon", "Leafeon", "Glaceon", "Togepi",
        "Tyranitar", "Metagross", "Salamence", "Rayquaza", "Infernape",
        "Torterra", "Empoleon", "Darkrai", "Garchomp", "Zoroark",
        "Chandelure", "Greninja", "Decidueye", "Incineroar", "Primarina",
        "Zacian", "Zamazenta", "Eternatus", "Dragapult", "Cinderace"
    ];
    
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    return pokemonList[randomIndex];
}

async function fetchdata() {
    
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // const pokemonName = getRandomPokemon().toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch resourse");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src=pokemonSprite;
        imgElement.style.display="block";
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
}