let inpt = document.querySelector(".container").children;
console.log(inpt);
let i=true;
let arr=[];
function Website_bookmark(website ,websiteurl) {

    let bookmark =document.querySelector(".container");
    bookmark.insertAdjacentHTML("beforeend", `<div class="bookmarker"> <a href=${websiteurl} target="_blank">${website}</a>  <button class="dltbtn" >delete bookmark</button></div>`);
    
}
while (i==true) {
    let a = confirm("Do you want to add a bookmark website");
    if(a==false){
        i=a;
        break;
    }
    var WebSiteName = prompt("Enter your WebSiteName");
    var WebSiteUrl = `https://www.${prompt("enter webiste url")}`;
    Website_bookmark(WebSiteName, WebSiteUrl);
    console.log(WebSiteName);
    console.log(WebSiteUrl);

}
let btn = document.querySelector(".button");
btn.addEventListener("click", (listener=>{
     WebSiteName = prompt("Enter your WebSiteName");
     WebSiteUrl = `https://www.${prompt("enter webiste url")}`;
     Website_bookmark(WebSiteName, WebSiteUrl); 
}))

let dltbtn = document.querySelector(".dltbtn");
console.log(dltbtn.parentElement);
dltbtn.addEventListener("click", (listener)=>{
    dltbtn.parentElement.innerHTML="";
})
