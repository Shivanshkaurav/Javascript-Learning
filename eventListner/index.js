const heading = document.getElementById("h1");
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", ()=>{
    box.classList.add("classforDiv");

})

btn.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    btn.style.backgroundColor = "purple";

    box.removeEventListener("mouseover", func1);
})

function func1(){
    btn.style.transform = "scale(1.1)";
    heading.style.backgroundColor = "pink";
}

box.addEventListener("mouseover", func1)

box.addEventListener("mouseout", ()=>{
    btn.style.transform = "";
    heading.style.backgroundColor = "";
})

box.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = "rgb(50,50,50)";
})

box.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#fff";
})

 