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

class Animal {
    constructor(name) {
        this.name = name;
        console.log(`Object is created`);
    }
    eats(){
        console.log(`khata hu`);
    }
    jump(){
        console.log(`Uchhalta hu`); 
    }
}
class Lion extends Animal{
    constructor(name){//constructor overriding
        super(name);//agr constructor ko redefine kr rhe ho so you also need to call the previous one so use super(parameters) key word to call extends class constructor        
        console.log(`Object is created and he is a Lion`);
    }
    eats(){//method overriding
        super.eats();//calling the parent class method
        console.log(`Khata hu roar`);
        
    }
}
let a =new Animal("billi");
let l = new Lion("shera");
console.log(l);
