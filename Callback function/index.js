const gamesList = [];
const game = {};

const fetchData = (callback)=>{
    setTimeout((callback)=>{
        gamesList.push({
            name: "game1",
            id: "123"
        },
        {
            name: "game2",
            id: "1234"
        },
        {
            name: "game3",
            id: "1235"
        }
        );
    
        console.log("Console log after fetching");
        callback();
    
    },4000, callback);
};

const displayGame =()=>{
    setTimeout(() => {
        for (let i = 0; i < gamesList.length; i++) {
            const p = document.createElement("p");
            p.innerText = gamesList[i].name;
            document.body.append(p);
        }
        console.log("Console log after displaying");
    }, 1000);
}

fetchData(displayGame);