let key = prompt("Enter the key you want to set ");
let value = prompt("Enter the value you want to set");

localStorage.setItem(key, value);
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if(key=="color"){
    localStorage.removeItem(key);
}

if(key==0){
    localStorage.clear();
}