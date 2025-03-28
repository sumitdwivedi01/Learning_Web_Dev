// Promises :- objects in java script 
// used to handel the asynchronous operations and it's resulting value
//helps to manage asynchronous operations without callback function

// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

//using callback 

// function walkdog(callback) {
//     setTimeout(() => {
//         console.log(`You walked the dog`);
//         callback(); 
//     }, 1500);
// }
// function cleankitchen(callback) {
//     setTimeout(() => {
//         console.log(`You cleaned the kitchen`);
//         callback();
//     }, 2000);
// }
// function taketrash(callback) {
//     setTimeout(() => {
//         console.log("You takeout the trash");
//         callback();
//     }, 500);
// }

// walkdog(()=>{
//     cleankitchen(()=>{
//         taketrash(()=>{
//             console.log("You finsihed all the chores!");
//         })  
//     })
// });

// function walkdog(){
//     return new Promise((resolve , reject )=>{
//         let dogwalked=true;
//         if(dogwalked==true){
//             setTimeout(() => {
//                 resolve("You walked the dog :)");
//             }, 1500);
//         }
//         else{
//             reject("You didn't walked the dog");
//         }
//     });
// }


// function cleankithcen(){
//    return new Promise ((resolve , reject)=>{
//         const kitchencleaned = false;
//         if(kitchencleaned==true){
            
//             setTimeout(() => {
//                 resolve("You cleaned the kitchen :)");
//             }, 2000);
//         }
//         else{
//             reject("You didn't cleaned the kitchen you basterd");
//         }
//     })
// }

//  function takeouttrash(){    
//      return new Promise((resolve , reject)=>{
//          let taketrash = true;
//          if(taketrash==true){
//              setTimeout(() => {
//                  resolve("You takeout trash :)");
//                 }, 500);
//             }
//             else{
//                 reject("You did't takeout the trash");
//             }
//         });
// }   
// promise chaining

// walkdog().then((a)=>{ console.log(a); return cleankithcen()})
// .then((a)=>{ console.log(a); return takeouttrash()}).then((a)=>{ console.log(a);  console.log("You have cleared all chroes!")})
// .catch((error)=>console.log(error)).finally(()=>{console.log("The code is executed Succesfully:)");});

let walkdog = new Promise((resolve , reject )=>{
    let dogwalked=true;
    if(dogwalked==true){
        setTimeout(() => {
            console.log("yes i am done 1");
            resolve("You walked the dog :)");
        }, 1500);
    }
    else{
        reject("You didn't walked the dog");
    }
});

let cleankitchen= new Promise ((resolve , reject)=>{
    const kitchencleaned = true;
    if(kitchencleaned==true){
        
        setTimeout(() => {
            console.log("yes i am done 2");
            resolve("You cleaned the kitchen :)");
        }, 2000);
    }
    else{
        reject("You didn't cleaned the kitchen you basterd");
    }
});

let taketrash = new Promise((resolve , reject)=>{
    let taketrash =true;
    if(taketrash==true){
        setTimeout(() => {
            console.log("yes i am done 3");
            resolve("You takeout trash :)");
           }, 500);
       }
       else{
           reject("You did't takeout the trash");
       }
   });

//    walkdog.then((result)=>{
//     console.log(result);
//     return cleankitchen;
//    }).then((result)=>{
//     console.log(result);
//     return taketrash;
//    }).then((result)=>{
//     console.log(result);
//     console.log("You have cleared all the chores");
//    }).catch((error)=>{
//     console.log(error);
//    }).finally(()=>{
//     console.log(`Your code is exicuted succesfully`);
    
//    })

// let checkall = Promise.all([walkdog , cleankitchen , taketrash])
// checkall.then(a=>{
//     console.log(a);
// })

//allsetttled doesn't need all to be true just need to settled either resolved or rejected

// let checkall = Promise.allSettled([walkdog , cleankitchen , taketrash])
 
// checkall.then(a=>{
//     console.log(a);
// })
//consle out put array
/*0
: 
{status: 'fulfilled', value: 'You walked the dog :)'}
1
: 
{status: 'fulfilled', value: 'You cleaned the kitchen :)'}
2
: 
{status: 'rejected', reason: "You did't takeout the trash"} */
// Promise.race([taketrash])
Promise.any([walkdog , cleankitchen , taketrash]); 