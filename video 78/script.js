async function blink() {
    return new Promise ((resolve , reject)=>{
        
    })
}
function random_time() {
    let r_time=Math.floor(1000 + Math.random()*7000);
    return r_time;
}
async function step1() {
    let s1=document.getElementById("step1");
    let time=random_time();
 
    console.log(time);
    // s1.innerText=blink();
    return new Promise ((resolve , reject )=>{
        setTimeout(() => {
            resolve(s1.innerText="Initializing Hacking");
        }, time);
    })
}
async function step2() {
    let s2=document.getElementById("step2");
    let time=random_time();
    console.log(time);
    s2.innerText="..."
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            resolve(s2.innerText="Reading your Files");
        }, time);
    })
}
async function step3() {
    let s3=document.getElementById("step3");
    let time=random_time();
    console.log(time);
    s3.innerText="...";
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            resolve(s3.innerText="Password files Detected");
        }, time);
    })
}
async function step4() {
    let s4=document.getElementById("step4");
    let time=random_time();
    console.log(time);
    s4.innerText="...";
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(s4.innerText="Sending all passwords and personal files to server");
        }, time);
    })
}
async function step5() {
    let s5=document.getElementById("step5");
    let time=random_time();
    console.log(time);
    s5.innerText="...";
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            resolve(s5.innerText="Cleaning up");
        }, time);
    })
}

async function Start_hacking() {
    try {
     await step1();
     await step2();
     await step3();
     await step4();
     await step5();
    } catch (error) {
        console.log(error);
    }
}
Start_hacking();