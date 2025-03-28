// console.log("sumit is amazzigggg");
// console.log("i am printed at second");
// let a = setTimeout(() => {
//   console.log("printed after the whole synchronous content");
// }, 0);
// let b = setTimeout(() => {
//   console.log("Second Interval ");
// }, 0);
// const fn =() => {
//   console.log("nothing");
// }

// const callback = (args)=>{
//     console.log(args);
//     fn();
// }
// const loadScript = (src , callback) => {
//   let sc = document.createElement("script");
//     sc.src=src;
//     sc.onload =callback("shaurya");
//     document.head.append(sc);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// console.log(`step1`);
// console.log(`step2`);
// setTimeout(() => {
//   console.log(`sharya`);
  
// }, 2000);
// // function callback(result){
// //   console.log(result);
  
// // }
// // function check(callback){
// //     setTimeout(() => {
// //       callback("Execution Done!");
// //     }, 2000); 
// // }
// const callback = (result)=>{
//   console.log(result);
  
// }
// function check(callback){
//     setTimeout(() => {
//       callback("Execution Done!");
//     },1000); 
// }
// check(callback);
// console.log(`step3`);
// // check(callback);


// hello();
// bye();
//  function hello() {
//   setTimeout(() => {
//     console.log(`Hello!`);
//   }, 2000);
//  }
//  function bye() {
//   console.log(`Goodbye!`);
  
//  }

hello(tata);
 function hello(callback) {
  setTimeout(() => {
    console.log(`Hello!`);
    callback();
  }, 2000);
 }
 function bye() {
  console.log(`Goodbye!`);
  
 }
 function tata(){
  console.log(`Tata <3`);
  
 }

 sum(showresult , 8 , 9);

 function sum(callback , x , y) {
  let result = x+y;
  callback(result);
 }
 function displayresult(result){
  console.log(result);
  
 }
function showresult(result){
  document.getElementById("myH1").textContent = result;
}