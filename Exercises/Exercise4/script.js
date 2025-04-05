function update_time() {
    let currenttime= new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month=currenttime.getMonth().toString().padStart(2 , `0`);
    let date=currenttime.getDate().toString().padStart(2,`0`);
    let year=currenttime.getFullYear().toString().padStart(4 ,'0');
    let day=currenttime.getDay();
    let hours= currenttime.getHours().toString().padStart(2,`0`);
    let minutes = currenttime.getMinutes().toString().padStart(2,`0`);
    let seconds = currenttime.getSeconds().toString().padStart(2,`0`);

    document.getElementById("time").innerHTML =`${hours}:${minutes}:${seconds}`;
    document.getElementById("date").innerHTML =`${date} -`;
    document.getElementById("month").innerHTML =`${(parseInt(month)+1).toString().padStart(2,`0`)} -`;
    document.getElementById("day").innerHTML =`${days[day]}`;
    document.getElementById("year").innerHTML =`${year}`;
}
update_time();
setInterval(() => {
    update_time();
}, 1000);