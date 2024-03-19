const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303";
            break;

        case "taurus":
            body.style.backgroundColor = "#f0cc64";
            break;

        case "gemini":
            body.style.backgroundColor = "#dc9208";
            break;

        case "cancer":
            body.style.backgroundColor = "#00cdc2";
            break;

        case "leo":
            body.style.backgroundColor = "#ff87c2";
            break;

        case "virgo":
            body.style.backgroundColor = "#66cd6d";
            break;

        case "libra":
            body.style.backgroundColor = "#ab00a0";
            break;
        
        case "scorpio":
            body.style.backgroundColor = "#6b0808";
            break;
            
        case "sagittarius":
            body.style.backgroundColor = "#e12600";
            break;    

        case "aquarius":
            body.style.backgroundColor = "#025300";
            break;
            
        case "capricorn":
            body.style.backgroundColor = "#c85aff";
            break;
            
        case "pisces":
            body.style.backgroundColor = "#001991";
            break;

        default:
            body.style.backgroundColor = "#fff";
            break;
    }
};