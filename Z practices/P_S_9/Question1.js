// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(`Script ${src} loaded successfully`);
//         script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
//         document.body.appendChild(script);
//     });
// }

// loadScript("example.js")
//     .then(message => {
//         alert(message);
//     })
//     .catch(error => {
//         console.error(error);
//     });

function loadScript (src) {
    return new Promise((resolve , reject )=>{
        const script= document.createElement("script");
        script.src=src;
        script.onload=()=> resolve(`Script ${src} loaded succesfully`);
        script.onerror=()=> reject(new Error(`Failed to load script : ${src}`));
        document.body.appendChild(script);
    })
}

loadScript("example.js")
.then(message=> alert(message))
.catch(error => console.log(error))
.finally(console.log(`You have succesfully called loadScript function `))