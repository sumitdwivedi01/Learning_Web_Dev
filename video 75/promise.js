console.log(`This is promises`);
let prom1= new Promise ((resolve , reject )=>{
   let a = Math.random();
    if(a <.50){
    reject("Oops! random number is not supporting you XD 1");
   }
   else{
    setTimeout(() => {
        console.log(`Yeah you are done`);
        resolve("resolved");
    }, 3000);
   }
});
prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
let prom2= new Promise((resolve , reject )=>{
    let a = Math.random();
    if(a<.50){
        reject("Oops! random number is not supporting you XD 2");
    }
    else{
        setTimeout(() => {
            console.log(`Yeah you are done`);
            resolve("resolved");
        }, 1000);
    }
})