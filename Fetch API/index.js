const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

// Fetch Data using Promises
// const fetchData = ()=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=> h1.innerText = data.fact)
//     .catch((e)=> console.log(e))
//     .finally(()=> console.log("all done"));
// }



// Fetch Data using Async-Await along with try and catch
const fetchData = async ()=>{
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        
        h1.innerText = data.fact;
    } catch (error) {
        console.log(error.message);
    }
    finally{
        console.log("Final One")
    }
}



fetchData();