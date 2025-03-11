/* faulty calculator
    + --> -
    * --> +

    - --> /
    / --> **

    */
   let random=Math.random();
   console.log(random);
let a=prompt("Enter first number");
let b=prompt("Enter operation you want to perform");
let c=prompt("Enter second number");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    b=obj[b];
    alert(` the result of ${a} ${b} ${c} is  ${eval(`${a} ${b} ${c}`)}`);

}
else{
    alert(` the result of ${a} ${b} ${c} is  ${eval(`${a} ${b} ${c}`)}`);
}