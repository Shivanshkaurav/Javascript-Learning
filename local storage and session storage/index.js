const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = ()=>{
    localStorage.setItem(
        "key1", 
        JSON.stringify({name: "Shivansh", surname: "Kaurav"})
        );
}

btn.addEventListener("click", btnClick);
deleteBtn.addEventListener("click", ()=>{
    localStorage.clear();
})

if(localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")));
}