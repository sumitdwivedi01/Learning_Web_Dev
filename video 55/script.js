console.log("this is lecture no 55")
var a=5;
// var b=2.033;
let b=3;
var c="Harry"; 
console.log(a+b+7)
console.log(typeof a ,typeof b , typeof c)

// const a1=7;
// a1=a1+7;  //this will throw an error in console
// not allowed once const is defined can't change it's value again it will remain same at any cost and gives an error in console
{
    let b=90;
    console.log(b + " it will show b of inside of block")
}
console.log(b + " it will show global declared b becauase the last b ended in the block")

let p=4;
let q=6.6;
const r=true;
let s="Senorita";
let t=undefined;
let u=null;
console.log(p , q ,r ,s ,t , u)
console.log( typeof p ,  typeof q , typeof r , typeof s , typeof t ,  typeof u)
let v= {
    name:"Sumit",
    "roll no":"230280202054",  
    "is handsome":true
}
console.log(v)
v.branch="CSE"//adding new key in object
console.log(v)
v.branch="Computer Science and Engineering"//updatng the value of key in the object re-writing value
console.log(v)