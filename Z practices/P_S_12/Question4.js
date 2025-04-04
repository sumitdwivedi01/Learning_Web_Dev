let principle = parseInt(prompt("Enter the Prinipal"));
let RateOfInt=parseInt(prompt("Enter Rate of Interest in %"));
let Time = parseInt(prompt("Enter the number of Years"));

function Calculate_SI(P , R , T) {
    let SI = (P*R*T)/100;
    console.log(`Your Simple interest of given data is : ${SI}`);
    return SI;
}

Calculate_SI(principle, RateOfInt, Time);