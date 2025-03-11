/* faulty calculator
    + --> -
    * --> +

    - --> /
    / --> **

*/
function sum(num1 , num2) {
    return num1+num2;
}
function multiplication(num1 , num2) {
    return num1*num2;
}
function subtraction(num1 , num2) {
    return num1-num2;
}
function division(num1 , num2) {
    return num1/num2;
}
function square(num1 , num2) {
    return num1**num2;
}

let num1=2;
let num2=3;
let a=Math.random();
if(a<0.1){
    let add=subtraction(num1,num2);
    console.log("The sum of these numbers is : " , add);
    let multiply=sum(num1,num2);
    console.log("The multiplication of these numbers is : " , multiply);
    let minus=division(num1,num2);
    console.log("The subtraction of these numbers is : " , minus);
    let divide=square(num1,num2);
    console.log("The division of these numbers is : " , divide);
}
else{
    let add=sum(num1,num2);
    console.log("The sum of these numbers is : " , add);
    let multiply=multiplication(num1,num2);
    console.log("The multiplication of these numbers is : " , multiply);
    let minus=subtraction(num1,num2);
    console.log("The subtraction of these numbers is : " , minus);
    let divide=division(num1,num2);
    console.log("The division of these numbers is : " , divide);

}