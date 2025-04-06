
let Text=["Initializing Hack program",
        "Hacking Ashish16 username",
        "Username found aashish17.",
        "Connecting to Facebook",]

       const random_delay=async () =>{
        return new Promise((resolve, reject) => {
            timeout=Math.floor(1+Math.random()*5);
            setTimeout(() => {
                resolve();
            }, timeout*1000);
        })
       }
       const addItem= async (item)=> {
           let div = document.createElement("div");
           div.innerHTML=item;
           document.body.append(div);
           await random_delay();
       }
       async function main() {
        document.body.innerHTML='';
        let t= setInterval(() => {
            let last = document.body.getElementsByTagName("div")//gets all dives inside the body it's actually the collection of all divs inside the document
            // console.log(last);
            last = last[last.length-1];//chooses the last div in body / document this is only represneting to the last div of the document
            // console.log(last);
            if(last.innerHTML.endsWith("...")){
                last.innerHTML= last.innerHTML.slice(0,last.innerHTML.length-3);
            }
            else{
                last.innerHTML+=".";
            }

        }, 600);
        
           for (const item of Text) {
               await addItem(item);
            }
            await random_delay();
            clearInterval(t);

        }