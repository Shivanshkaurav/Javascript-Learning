const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
 minute = 60 * second,
 hour = 60 * minute,
 day = 24 * hour;

const timerfunction = () => {

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() +1).padStart(2, "0"),
        yyyy = now.getFullYear();

        const enteredDay = prompt("Enter Day").padStart(2, "0");
        const enteredMonth = prompt("Enter Month").padStart(2, "0");

        now = `${mm}/${dd}/${yyyy}`


        let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

        if(now > targetDate){
            targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`
        }



    const intervalID = setInterval(() => {
        const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const difference = timer - today;
    const leftDay = Math.floor(difference/day);
    const leftHour = Math.floor((difference%day)/hour);
    const leftMinute = Math.floor((difference%hour)/minute);
    const leftSecond = Math.floor((difference%minute)/second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if(enteredDay>31){
        counterTimer.style.display = "none";
        heading.innerText = "Enter valid Date";
    }
    if(enteredMonth>12){
        counterTimer.style.display = "none";
        heading.innerText = "Enter valid Month";
    }
    if(enteredDay>31 && enteredMonth>12){
        counterTimer.style.display = "none";
        heading.innerText = "Enter valid Date & Month"
    }
    
    if(difference < 0){
        counterTimer.style.display = "none";
        heading.innerText = "Time's Up";
        clearInterval(intervalID);

    }
    }, 0);
}

timerfunction();