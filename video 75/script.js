console.log("sumit is amazzigggg");
console.log("i am printed at second");
let a = setTimeout(() => {
  console.log("printed after the whole synchronous content");
}, 0);
let b = setTimeout(() => {
  console.log("Second Interval ");
}, 0);
const fn =() => {
  console.log("nothing");
}

const callback = (args)=>{
    console.log(args);
    fn();
}
const loadScript = (src , callback) => {
  let sc = document.createElement("script");
    sc.src=src;
    sc.onload =callback("shaurya");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

