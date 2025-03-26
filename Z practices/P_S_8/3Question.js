let key = document.querySelector(".switch");
key.addEventListener("click", (e)=>{
    let bulb = document.querySelector(".bulb");
    bulb.classList.toggle("activebulb");
})