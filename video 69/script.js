let a=6;
function factorial(number) {
    let arr = Array.from(Array(number+1).keys());//create a array till number n without using loop
    console.log(arr.slice(1,));//slice array will be from 1 instead of 0
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c);
}
factorial(a);