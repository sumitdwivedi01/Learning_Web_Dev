function walkdog(){
    return new Promise((resolve , reject )=>{
        let dogwalked=true;
        if(dogwalked==true){
            setTimeout(() => {
                resolve("You walked the dog :)");
            }, 1500);
        }
        else{
            reject("You didn't walked the dog");
        }
    });
}


function cleankithcen(){
   return new Promise ((resolve , reject)=>{
        const kitchencleaned = false;
        if(kitchencleaned==true){
            
            setTimeout(() => {
                resolve("You cleaned the kitchen :)");
            }, 2000);
        }
        else{
            reject("You didn't cleaned the kitchen you basterd");
        }
    })
}

 function takeouttrash(){    
     return new Promise((resolve , reject)=>{
         let taketrash =true;
         if(taketrash==true){
             setTimeout(() => {
                 resolve("You takeout trash :)");
                }, 500);
            }
            else{
                reject("You did't takeout the trash");
            }
        });
}  

   async function doChores() {
    try{

        const walkdogresult = await walkdog();
        console.log(walkdogresult);
        
        const cleankitchenresult = await cleankithcen();
        console.log(cleankitchenresult);
        
        const takeouttrashresult = await takeouttrash();
        console.log(takeouttrashresult); 
        
        console.log(`You finished all the chores`);
    }
    catch(error){
        console.log(error);
        
    }
     
   }

   doChores();