// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getdata() {
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data =  await x.json();
    return data;

}

async function main() {
    
    
    console.log("starting java script");
    
    console.log(`Reading module`);
    
    console.log(`Taking data`);
    
    let data = await getdata(); 
    console.log(data);
    
    
    console.log(`Taken Data`);
    
    console.log(`All done`);
    
}
main();
//promise method
// let data = getdata().then(value=>{
//     console.log(value);
    
    
//     console.log(`Taken Data`);
    
//     console.log(`All done`);
    
// });