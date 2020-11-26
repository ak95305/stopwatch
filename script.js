//Variables
let hour = 0;
let minute = 0;
let second = 0;
let playBtn = document.getElementById("play");
let restartBtn = document.getElementById("restart");
let status = "start";
let interval = null;
let displayHour = 0;
let displayMinute = 0;
let displaySecond = 0;




//Event Listners
playBtn.addEventListener("click", playFunction);
restartBtn.addEventListener("click", restartFunction);



//Functions
function stopwatch() {
    //increment second by 1
    second++;

    //stopwatch function condition
    if(second === 60) {
        second = 0;
        minute++;
        
        if(minute === 60) {
            minute = 0;
            hour++;
        }
    }

    if(second < 10) {
        displaySecond = "0" + second;
    } else {
        displaySecond = second;
    }

    if(minute < 10) {
        displayMinute = "0" + minute;
    } else {
        displayMinute = minute;
    }

    if(hour < 10) {
        displayHour = "0" + hour;
    } else {
        displayHour = hour;
    }

    document.getElementById("preview").innerHTML = displayHour + ":" + displayMinute + ":" + displaySecond;
    
}

function playFunction() {
    if (status === "start") {
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("play").innerHTML = "<i class=\"far fa-stop-circle fa-3x\"></i>";
        document.getElementById("restart").innerHTML = "<i class=\"fas fa-redo fa-3x\"></i>";
        document.getElementById("head-text").innerHTML = "SUR YOU DID";
        status = "stop";
    } else {
        window.clearInterval(interval);
        document.getElementById("play").innerHTML = "<i class='fas fa-play-circle fa-3x'></i>";
        status = "start";
    }
}

function restartFunction() {
    window.clearInterval(interval);
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("preview").innerHTML = "00:00:00";
    document.getElementById("play").innerHTML = "<i class='fas fa-play-circle fa-3x'></i>";
}
