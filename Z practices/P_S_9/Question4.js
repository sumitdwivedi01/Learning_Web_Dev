function promise1(){
    return new Promise((resolve , reject )=>{
    setTimeout(() => {
        resolve("Promise 1");
    }, 1000);
})
}
function promise2(){
    return new Promise((resolve , reject )=>{
    setTimeout(() => {
        resolve("Promise 2");
    }, 2000);
})
}
function promise3(){
    return new Promise((resolve , reject )=>{
    setTimeout(() => {
        resolve("Promise 3");
    }, 3000);
})
}
async function main(){

    async function run_OneByOne() {
        console.time("Sequential Execution");
        let result1 = await promise1();
        console.log(result1);
        let result2 = await promise2();
        console.log(result2);
        let result3 = await promise3();
        console.log(result3);
        console.timeEnd("Sequential Execution");
        console.log("Sequential Results:",result1 , result2 , result3);
    }
    await run_OneByOne();
    async function run_together(){
        console.time("Parallel Execution");
        console.log(`prallel Execution`);
        // new Promise.all(promise1(),promise2(),promise3());
        let[result1 , result2 , result3] = await Promise.all([promise1() , promise2() , promise3()]);
        console.timeEnd("Parallel Execution");
        console.log(result1 , result2 , result3);
    }
   await run_together();
    
}
main();
// function createPromise(time, value) {
//     return new Promise(resolve => setTimeout(() => resolve(value), time));
// }

// async function runSequential() {
//     console.time("Sequential Execution");
//     let result1 = await createPromise(2000, "Result 1")
//     console.log(result1);
//     let result2 = await createPromise(3000, "Result 2")
//     console.log(result2);
//     let result3 = await createPromise(1000, "Result 3")
//     console.log(result3);
//     console.timeEnd("Sequential Execution");
//     console.log("Sequential Results:", result1, result2, result3);
// }

// async function runParallel() {
//     console.time("Parallel Execution");
//     let [result1, result2, result3] = await Promise.all([
//         createPromise(2000, "Result 1"),
//         createPromise(3000, "Result 2"),
//         createPromise(1000, "Result 3")
//     ]);
//     console.timeEnd("Parallel Execution");
//     console.log("Parallel Results:", result1, result2, result3);
// }

// console.log("Running sequential execution:");
// runSequential().then(() => {
//     console.log("\nRunning parallel execution:");
//     runParallel();
// });