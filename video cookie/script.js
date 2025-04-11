document.cookie="user1=sumit2342934879288";
document.cookie="user2=reeta093482903849";
console.log(document.cookie);
document.cookie="user1=senorita";
console.log(document.cookie);

const key = prompt("enter your key value");
const value = prompt("Enter your value of the key");

document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
//encodeURIComponent() just prevent our cookies to get special characters if we enter directly special characters it can destroy the value of the cookie and can make it useless so that's why we have the encodeURIComponent() method which just converts the special characters like "<space> , & , ; , = to different supporting characters like <space> = "%20" , ;=%3B , = : "%3D" , &: "%26"

// and to get the original value of the key we entered we can use decodeURIComponent mthod with decodeURIComponent("encoded value"); returns the original value 

//cookie options
//cookie have several options which can be provided after key=value; to a set call like this 
//document.cookie-"user =bin ; path=/a ; expires= tue , 29 march 2041 , 03:18:22 GMT"
//path and expires are option of the cookie "user=bin" we can only set one cookie at time