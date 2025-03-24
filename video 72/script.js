console.log("initializing Java Script");
let boxes = document.querySelector(".container").children;

function get_Random_color() {
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    
    return `rgb(${val1} ,${val2} , ${val3})`;
}

    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = get_Random_color();
        e.style.color=get_Random_color();
    })

//using hex color use toString(16) to convert a decimal into hexadecimal
// 16777215 :- is white color in decimals

// let boxes = document.querySelector(".container").children;
// function get_random_color() {
//     let color = Math.ceil(Math.random()* 16777215).toString(16);
//     console.log(`#${color}`);
//     return `#${color}`;
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = get_random_color();
//     e.style.color=get_random_color();
// })