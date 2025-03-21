let arr=[2,5,3,7,9,12];


// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

//map looping in arrays it creates a new array with help of an old array
let newArr=arr.map((e)=>{
    return e**2;
})

console.log(newArr);

//filter use
const greater_than_5 = (value , index , array)=> {
    if(value>5){
        return true;
    }
    return false;
}
console.log(arr.filter(greater_than_5))
//array.filter(function: define or call)


//array.reduce(function_name) reduces a function into a single value
let arr2=[1,2,3,4,5,6];
const red = (a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red));
let arr6=Array.from("sumit is amazing");
console.log(arr6);