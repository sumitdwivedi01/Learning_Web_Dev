let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("3 Second completed error is given");
    }, 3000);
})
async function promise_handel() {
     await promise.then(value=>console.log(value)).catch(error => console.log(error));
}
promise_handel();