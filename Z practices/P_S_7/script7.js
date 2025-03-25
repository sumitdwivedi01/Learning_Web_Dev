// document.querySelector(".box").style.backgroundColor="red";
let c= document.body.children;
c[0].firstElementChild.style.backgroundColor ="green";
c[0].lastElementChild.style.backgroundColor ="green";

// console.log(document.getElementsByTagName("li"))

//never do this
// document.getElementsByTagName("li").color = "cyan";
document.querySelectorAll("li").forEach(e=>{
    e.style.backgroundColor ="cyan";
})