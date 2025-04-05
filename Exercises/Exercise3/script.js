let jokearr;
async function main() {
    console.time("joke");
  const joke = await fetch("https://official-joke-api.appspot.com/jokes/random")
    if(!joke){
        throw new Error("Could not fetch joke");
    }
    const data = await joke.json();
    const setup = data.setup;
    const punchline = data.punchline;
//   console.log(joke);

  let arrQ=[`Question:${setup}`]; 
let arrA=[`Answer&nbsp    :${punchline}😁`];
jokearr+=[`${arrQ.toString()} ${arrA.toString()}`]
            console.log(arrQ.toString());
            console.log(arrA.toString());
            console.timeEnd("joke");
            let display= document.querySelector(".joke")
            display.innerHTML += `<p class ="jokes">${arrQ.toString()}
            <br>${arrA.toString()}</br></p>`
}
function clearpage() {
    let display= document.querySelector(".joke")
            display.innerHTML = ``;
    
}