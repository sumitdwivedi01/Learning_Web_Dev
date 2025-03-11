//strings
let a="Sumit"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); this is actually undefined
console.log(a.length); //a.length gives the length of the string or length of the array

let my_name="sumit";
let friend_name="sujal";
console.log("his name is " + my_name + " and his friend name is : " + friend_name);
console.log(`his name is ${my_name} and his friend name is : ${friend_name}`);//template literals use `backtick` and for variables use ${varname} this is called string interpolation

//esccape sequeance characters
//  if you want to give a variable value that a=sum"it 
// how will you give this 
let z=`sum"it`;
console.log(z);
// let b="sum"it"; this will not exicute it will not read the string
let b="  Hello how are you my friend";//so we will use Escape sequeance
console.log(b);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length); 
console.log(a.slice(1,4))
console.log(a.slice(0))


a=" sumit bhai sujal bhai";
console.log(a.replace(" bhai","bhau "));

let c=a.concat(b," i am good how are you?");// a + b +"string"
// let c=a+b+" i am good.."; //can also use this instead of concat
console.log(c);
console.log( c.startsWith(" sumit"));

console.log("har\"".length)
// let d=c.toLowerCase();
let d=c.toUpperCase();
console.log(d);

c="please give Rs 1000";
console.log(c);
let i=c.indexOf("1");
console.log(i);
c=c.slice(0,i);
console.log(c);
