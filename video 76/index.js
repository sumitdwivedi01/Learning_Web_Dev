// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS objec

// const names =`["sagar","sumit","sujal","arpit"]`;
// const people =`[{ "name": "sagar","age": 20,"isEmployed": true},
// {"name": "sumit","age": 20,"isEmployed": false},
// {"name": "sujal","age": 21,"isEmployed": true}
// ,{"name": "arpit","age": 16,"isEmployed": false}]`;
// const person = `{"name": "sagar","age": 20,"isEmployed": true,"Hobbies":["cricket" , "instagram" , "python"]}`;
// const names =["sagar","sumit","sujal","arpit"];
// const people =[{
//     "name": "sagar",
//     "age": 20,
//     "isEmployed": true
// },
// {
//     "name": "sumit",
//     "age": 20,
//     "isEmployed": false
// },
// {
//     "name": "sujal",
//     "age": 21,
//     "isEmployed": true
// },
// {
//     "name": "arpit",
//     "age": 16,
//     "isEmployed": false
// }
// ];
// const person = {
//     "name": "sagar",
//     "age": 20,
//     "isEmployed": true,
//     "Hobbies":["cricket" , "instagram" , "python"]
// };

// const jsonstring = JSON.stringify(person); //converts the string file in the js to objects/array in the JSON
// console.log(person);//this will return the array of person details in object
// console.log(jsonstring);
// const jsonstring = JSON.stringify(names);
// console.log(names);//this will return the array of names as in the json files
// console.log(jsonstring);//this will print the array of names in the string in the console

// const jsonstring = JSON.stringify(people);
// console.log(people);//prints the array of different objects as in the JSON files
// console.log(jsonstring);//prints the array of the objects in the string mannner

// const jsonparse = JSON.parse(names);
// console.log(names);
// console.log(jsonparse);
// const jsonparse = JSON.parse(people);
// console.log(people);
// console.log(jsonparse);
// const jsonparse = JSON.parse(person);
// console.log(person);
// console.log(jsonparse);

//thats all about the converting a json format into java script or in string

//now how to get json file into the script using fetch

//fetch returns a promise

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => {
    console.log(value);
}))
.catch(error=> console.log(error));