//Arrays
let arr=[1 , 7 ,"sumit" , true , 0];
// alert(arr);
console.log(arr.length);
console.log(arr);

//strings are immutable can't change on it
let s="Sumit";
s[0]="E";
console.log(s[0]);
console.log();

//arrays are mutable can perform change in it's elements
console.log(arr[0]);
// arr[0]=9980; can also change element's data type
arr[0]="sumit";
console.log(arr[0]);

console.log(arr.toString());//prints the string of comma separated values
console.log(arr.join(" and "));//can give cutomized separating value in the place of " and "
console.log(arr.pop()); // returns the value of the last element of the array and also delete that element from the array
console.log(arr); // now this array will not have last element which was 0 and size reduces by 1
console.log(arr.push(101));// this will return the new updated length of the array and insert the element in the array
console.log(arr); // now this array will not have last element which was 0 and size reduces by 1
console.log(arr.push("shaurya")); //will return 6 new length of the array after inserting the element in the array
console.log(arr); 
console.log(arr.shift());//returns the first element and removes it from the array
console.log(arr);
console.log(arr.unshift("reeta"));//returns the new length of the array after inseting at the first
console.log(arr);
delete arr[3];
console.log(arr);// it will show the empty at the place of arr[3] beause it do not clears the allocated memory just removes the value from it;

let arr1=[1,2,3,4];
let arr2=[5,8,6,7];
let arr3=[11,22,33,44];
console.log(a.concat)
