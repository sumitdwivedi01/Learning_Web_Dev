// let obj ={
//     a:1,
//     b:"sumit"
// }
// console.log(obj);
// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__ = animal; //Sets rabbit.[[Prototype]]= animal

// class Animal {
//     constructor(name) {//Constructor Method calles automatically as the object is created of the Class
//         this.name = name;
//         console.log(`Object is created`);
//     }
//     eats(){
//         console.log(`khata hu`);
//     }
//     jump(){
//         console.log(`Uchhalta hu`); 
//     }
// }
// class Lion extends Animal{
//     constructor(name){//constructor overriding
//         super(name);//agr constructor ko redefine kr rhe ho so you also need to call the previous one so use super(parameters) key word to call extends class constructor        
//         console.log(`Object is created and he is a Lion`);
//     }
//     eats(){//method overriding
//         super.eats();//calling the parent class method
//         console.log(`Khata hu roar`);
        
//     }
// }
// let a =new Animal("billi");
// let l = new Lion("shera");
// console.log(l);
 
class User {
    constructor(UserId , UserName) {
       
    let PlayerID = UserId;
    this.PlayerID = PlayerID;
    console.log(`Congratulations your PlayerID is : ${PlayerID}`);        
    let UName= UserName;
    this.UName =  UName;
    console.log(`Congratulations your User Name is : ${UName}`);        
    }
    get playerID(){
        return this.PlayerID;
    }
    set playerID(value){
        this.PlayerID = value;
    }
}

class Stats extends User{
    constructor( UserId , UserName ,matches , kills ){
        super(UserId , UserName);//Invoking super Constructor
        this.matches = matches;
        this.kills=kills;
        let KD = parseInt(kills)/parseInt(matches);
        this.KD = KD;
        console.log(`Matches This season : ${matches}`);
        console.log(`Kills This season : ${kills}`);
        console.log(`K/D : ${KD}`);
    }
    get gamematches(){
        return this.matches;
    }
    set gamematches(value){
        this.matches=value;
    }
    
}

let Player1 = new User("556792011295" , "X//Manav//");
console.log(Player1);
let player2 = new Stats("556792011295" , "X//Manav//",200 , 857);
console.log(player2);

console.log(player2.playerID);//give original output
player2.PlayerID = "8984959485"//setvalue 
console.log(player2.matches);
player2.gamematches=667;
console.log(player2.matches);
console.log(player2.KD);

console.log(player2.playerID);//now give updated value of the id
class Empolyee {
    static sMethod(){
        alert("hey!");
    }
}
Empolyee.sMethod();