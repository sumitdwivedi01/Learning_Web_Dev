console.log("Java Script is initialized");
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let card= document.createElement("div");
    if(views>=1000 && views<1000000){
        views=views/1000+"K";
    }
    else if(views>=10000000){
        views=views/10000000+"M";
    }
    card.className ="card";
    card.innerHTML=`<div class="thumbnail"><img src="${thumbnail}" alt="thumbnail">
            <div class="view_time">${duration}</div>
        </div>
            <div class="info">
                <div class="title"><b>${title}</b></div>
                <div class="small">
                    <span class="chnlname">${cName}</span>
                    <span>•</span>
                    <span class="views">${views} views </span>
                    <span>•</span>
                    <span class="upload_time"> ${monthsOld} months ago</span>
                </div>
            </div>`
    document.querySelector(".container").append(card);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
createCard("Exercise 1 - Pure HTML Media Player | Sigma Web Development Course - Tutorial #12", "CodeWithHarry",500000 , 9, "12:40", "https://i.ytimg.com/vi/5xFRg_TzlAg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGG_cxzKxF9u_ZYKjFLo8K1nhxUw")
createCard("I-run man", "The insiders #sys", 690000000, 1, "00:59","https://hdqwalls.com/wallpapers/iron-man-2018-4k-5k-x0.jpg")