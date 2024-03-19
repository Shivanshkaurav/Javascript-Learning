const arr = [];

const fetchData = (arr)=>{
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            arr.push({name:"Shivansh"});
            if(arr.length>0) resolve("Data fetched");
            else reject("Some Technical Glitch");
        }, 2000);
    });
};

fetchData(arr).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message)
}).finally(()=>{
    console.log("Will Work Either Way")
})
