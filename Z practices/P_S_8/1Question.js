console.log("java is initialized");
// Question 1
let B = document.querySelector(".buttons").children;
console.log(B);
// Array.from(B).forEach(e=>{
//     console.log(e);
// })
B[0].addEventListener("click", (e)=>{
    alert("You pressed Button 1");  
})
B[1].addEventListener("click", (e)=>{
    alert("You pressed Button 2");  
})
B[2].addEventListener("click", (e)=>{
    alert("You pressed Button 3");  
})
B[3].addEventListener("click", (e)=>{
    alert("You pressed Button 4");  
})