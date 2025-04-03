console.log(a1);
async function sleep() {
    return new Promise((resolve, reject )=>{
       setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
const  sum =async(a,b,c,d,e,f,g)=>{
    return a+b+c+d+e+f+g;
}
(async function IIFE() { //IIFE :- Imidiately Invoked Function Expression
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x , y] = [1 ,5 ,7];
    // console.log(x,y);
    // let obj ={
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // let {a,b} =obj;
    // console.log(a,b);

    // let arr=[1,2,5,7,9,3,32];
    // console.log(sum(arr[0] ,arr[1],arr[2],arr[3],arr[4],arr[5],arr[6] ))
    // console.log(sum(...arr));

    const a ="Yes";
    const b = "No";

    const c = {a , b};
    console.log(c);
    
})();
var a1 =6;