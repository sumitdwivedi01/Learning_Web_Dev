document.title ="Question1";
function printHello() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Hello`);
        }, 2000);
    }) 
}
function printWorld() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`World`);
        }, 2000);
    })
    }

async function main() {
    await printHello().then(value=>console.log(value));
    await printWorld().then(value=>console.log(value));
}
main();