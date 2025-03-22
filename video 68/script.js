console.log("Sumit");
let boxes= document.body.getElementsByClassName("box");
console.log(boxes);

// boxes[2].style.backgroundColor ="aqua";
// document.getElementById("aqua").style.backgroundColor="aqua";
document.querySelector(".box").style.backgroundColor="aqua";//jis bhi 1st element mei .box hoga us pr ye property apply ho jaegi
document.querySelector("#aqua").style.backgroundColor="red";//. and # use for the class or id onlyname will not work 

//querySelectorAll
console.log(document.querySelectorAll(".box"))//return a node list (array) of all elements having the property .box can't apply css propety directly
//use foreach loop instead
document.querySelectorAll(".box").forEach(e =>{
    console.log(e);
    e.style.backgroundColor="green";
})
 