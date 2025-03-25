let button = document.getElementById("btn");
//mouse events 
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("mouseenter", ()=>{
    document.querySelector(".box").innerHTML="<b> Yeah! you were clicked </b> Enjoyy";
})
button.removeEventListener("mouseenter", ()=>{
    document.querySelector(".box").innerHTML="<b> Yeah! you were clicked </b> Enjoyy";
})
button.addEventListener("contextmenu", ()=>{
    alert("Please don't hack us by right click");
})
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
    console.log(e);
    if(e.key = `enter`){
        alert("Enter key is pressed");
    }
})

