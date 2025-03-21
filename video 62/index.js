/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
//     let a1="Crazy";
//     let a2="Amazing";
//     let a3="Fire";

    
//     let s1="Engine";
//     let s2="Foods";
//     let s3="Garments";

//     let w1="Bros";
//     let w2="Limited";
//     let w3="Hub";
   
//     let random1=Math.random();
//     let random2=Math.random();
//     let random3=Math.random();


// function adjactives() {
//     if(random1<=0.33 && random1>=0){
//         return a1;
        
//     }
//     else if(random1<=0.66 && random1>0.33){
//        return a2;
//     }
//     else{
//         return a3;
//     }
// }
// function shop_name(){
//     if(random2<=0.33 && random2>=0){
//         return s1;
        
//     }
//     else if(random2<=0.66 && random2>0.33){
//        return s2;
//     }
//     else{
//         return s3;
//     }
// }
// function Another_word(){
//     if(random3<=0.33 && random3>=0){
//         return w1;
        
//     }
//     else if(random3<=0.66 && random3>0.33){
//        return w2;
//     }
//     else{
//         return w3;
//     }
// }

// console.log("Generating the name");
// alert("Generating the name");
// let name_1=adjactives();
// let name_2=shop_name();
// let name_3=Another_word();
// console.log(`the name of your business is : ${name_1} ${name_2} ${name_3}`);
// alert(`the name of your business is : ${name_1} ${name_2} ${name_3}`);



// if(random1<=0.33 && random1 >=0){
//     if(random2 <=0.33 && random2>=0){
//         if(random3 <=0.33 && random3>=0){
        

//         }
//         else if(random3 >0.33 && random3<=0.66){
    
//         }
//         else{
            
//         }

//     }
//     else if(random2 >0.33 && random2<=0.66){
//         if(random3 <=0.33 && random3>=0){
        

//         }
//         else if(random3 >0.33 && random3<=0.66){
    
//         }
//         else{
            
//         }
//     }
//     else{
//         if(random3 <=0.33 && random3>=0){
        

//         }
//         else if(random3 >0.33 && random3<=0.66){
    
//         }
//         else{
            
//         }
        
//     }
// }

/*
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

 */
let obj1 ={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let obj2={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let ran1=Math.floor(Math.random()*3)+1;
let ran2=Math.floor(Math.random()*3)+1;
let ran3=Math.floor(Math.random()*3)+1;

console.log( obj1[ran1] + " " +obj2[ran2] + " " +obj3[ran3]);
