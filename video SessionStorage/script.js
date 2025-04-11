// sessionStorage.setItem("name" , "summi");
// sessionStorage.setItem("newName" , "reeta");
// console.log(sessionStorage.getItem("newName"));
// sessionStorage.removeItem("name");
// sessionStorage.clear();
// sessionStorage.setItem("name" , "summi");

window.onstorage =(e)=>{
    alert("changed");
    console.log(e);
}
//activates on another same tab if applied change on the same url