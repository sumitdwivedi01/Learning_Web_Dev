let arr =[2,30,11,4,3];
function average(a , b ,c ,d , e) {
    let average = (a+b+c+d+e)/5;
    return average;
}

console.log(average(...arr));//spread operator