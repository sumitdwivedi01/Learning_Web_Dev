const passwordInput = document.querySelector(".password input"),
      rangeInput = document.querySelector(".rangebox input"),
      copyImg = document.getElementById("copyImg"),
      sliderNumber= document.querySelector(".rangebox .slidernumber"),
      generateButton= document.querySelector(".generate-button");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@~";

const generatePassword=()=>{
    let newPassword="";

    for (let i = 0; i < rangeInput.value; i++) {
        const randomNumbers=Math.floor((Math.random()*(allCharacters.length)))+0;
        newPassword+=allCharacters[randomNumbers];
    }
    passwordInput.value=newPassword;
    copyImg.src=`./copy.svg`
}

rangeInput.addEventListener("input", ()=>{
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});
copyImg.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyImg.src =`./copied.svg`
})
generatePassword();
generateButton.addEventListener("click", generatePassword);

// const get_random=(a,b)=>{
//         const max = Math.max(a,b);
//         const min = Math.min(a,b);
//         let random = Math.floor(Math.random()*(max-min+1))+min;
//         return random;
//     }
// class Password {
//      constructor(pass) {
//         this.pass = pass;
//         console.log(this.pass);
//     }
// }
// const sp_arr=[33,35,36,37,38,42,64,94,95];
// const random_uppercase = ()=> {
//     return String.fromCharCode(get_random(65,90));
// }

// const random_lowercase =()=>{
//     return String.fromCharCode(get_random(97,122));
// }

// const random_specialChar = ()=>{
//     return String.fromCharCode(sp_arr[get_random(0,sp_arr.length-1)]);
// }

// const random_number = ()=>{
//     return get_random(0,9);
// }


// const Generate_random_password=(length)=>
// {   
// let p1 = new Password((random_uppercase()+random_lowercase()+random_specialChar()+random_number()+random_lowercase()+random_uppercase()+random_lowercase()+random_number()));
// return p1;
// }
// console.log(Generate_random_password().pass);