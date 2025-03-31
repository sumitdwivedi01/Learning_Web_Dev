async function loadScript(src) {
    return new Promise((resolve , reject)=>{
        const script = document.createElement("script");
        script.src=src;
        script.onload=()=>resolve("Script loaded succesfully!");
        script.onerror=()=>reject(new Error("Can't load the script"));
        document.body.appendChild(script);
    });
}
async function loadScriptAsync(src) {
    try {
        console.log("running");
        let message = await loadScript(src);
        alert(message);
    } catch (error) {
        console.error(error);
    }
}

loadScriptAsync("example.js");