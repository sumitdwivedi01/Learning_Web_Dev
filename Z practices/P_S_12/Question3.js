async function prom_func(n) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Executed");
        }, n*1000);
    })
}

(async function Executing(n) {
    await prom_func(n).then(value=>console.log(value));
})(2);