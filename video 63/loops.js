let a=[1,23,4,56,88,11];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);   
// }
// a.forEach((value , index , a)=>{
//     console.log(value , index , a);
// });

let obj={
    a:2,
    b:9,
    c:23
}

//for-in loop 
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element , key);

//     }
// }


//for-of loop
for (const element of a) {
    console.log(element);
}