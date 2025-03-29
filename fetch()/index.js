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

async function fetchdata() {
    
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
    } catch (error) {
        
    }
}