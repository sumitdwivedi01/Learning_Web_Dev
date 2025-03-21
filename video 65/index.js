/* 
Calculate the factorial of a number using reduce and for loop
*/

//reduce mehtod

let arr=[1];
let number=prompt("Enter a number you want to calculate it's factorial");
for(let i=0; i<number ; i++){
    arr[i]=i+1;
}

const fact=(a,b)=>{
    return a*b;
}
console.log(arr.reduce(fact));

//loop Method

// let num=prompt("Enter number you want to calculate it's factorial");
// let factt=1;
// if(num<1){
//     console.log(factt);
// }
// else{
//     for(let i=num;i>=1;i--){
//         factt*=i;
//     }
//     console.log(factt);
// }