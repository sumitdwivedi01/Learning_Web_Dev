// let a=1;
// for(let i=0 ; i<100; i++)
// {
//     console.log(a+i);
// }
// let object ={
//     name:"sumit dwivedi",
//     "roll no":"230180101054",
//     branch:"CSE"
// }
// //for in loop
// for (const key in object) {
//      const element = object[key];
//      console.log( element);
//     }
// //same same
// // for in loop : best for objects when you want to iterate through keys
// // avoid using for arrays it may pickup unexpected propertiese
// for (const key in object) {
//      console.log(object[key]);

// }
// //for of loop
// //iterates over the values of an iterable (arrays , strings , maps , sets etc)
// for (const c of "Sumit Dwivedi") {//repeats the all elements of the string "sumit dwivedi"
//     console.log(c);
// }

//while loop
let i=5;
while(i<6){
    console.log(i+" using while loop if i<6");//block of code
    i++;//updation
}
//do while loop
let j=10
do{
 console.log(j + " using dowhile loop if i<3");
}
while (i<3);