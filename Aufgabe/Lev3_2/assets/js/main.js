
// let interval1;
let seconds = 00;
let minutes = 00;
let input;
let interval1;

function startMinCountdown() {
    input = Number(document.getElementById('minutes').value);
    output = document.getElementById("time");
    output.textContent = input + ":" + seconds;
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
    interval1 = setInterval(timer, 1000);
}

function resetTimer() {
    clearInterval(interval1);
    minutes = 0;
    seconds = 0;
    output.textContent = "00:00";
    document.getElementById("minutes").value = "";

}