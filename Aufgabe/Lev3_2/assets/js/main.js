
// let interval1;
let seconds = 0o0;
let minutes = 0o0;
let input;
let interval1;

function startMinCountdown() {
    if (seconds > 0 || minutes > 0) {
        console.log("BAC")
        interval1 = setInterval(timer, 1000);
        return
    }
    input = Number(document.getElementById('minutes').value) || input;
    if (!input) {
        return
    }
    output = document.getElementById("time");
    output.textContent = input + ":" + ("0" + seconds).slice(-2);
    seconds = 60;
    minutes = input - 1;
    seconds = 60;
    interval1 = setInterval(timer, 1000);
    document.getElementById("minutes").value = "";
}



function timer() {
    seconds--;
    console.log(seconds);
    if (minutes == 0 && seconds == 0) {
        clearInterval(interval1);
    } else if (seconds == 0) {
        seconds = 59;
        minutes--;
    }
    output.textContent = minutes + ":" + seconds;
}

function pauseMinCountdown() {
    clearInterval(interval1);
}

function restartMinCountdown() {
    clearInterval(interval1)
    seconds = 0
    minutes = 0
    startMinCountdown()
}

function resetTimer() {
    clearInterval(interval1);
    minutes = 0;
    seconds = 0;
    output.textContent = "00:00";
    document.getElementById("minutes").value = "";

}