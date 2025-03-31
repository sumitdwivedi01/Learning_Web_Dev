let a = prompt("Enter first number");

let b = prompt("Enter Second number");
if(isNaN(a) || isNaN(b)){
    throw new SyntaxError("ENTER a valid number");
}
let sum = parseInt(a)+parseInt(b);
let x=1;
function main() {
    
    try {
        console.log(`The sum of the numbers is : ${sum*x}`);
        
    } catch (error) {
        console.log("Error aa gya bhai ")
    }
    finally{
}
    console.log(`closing files and closing db`);
}