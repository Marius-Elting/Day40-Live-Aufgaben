
let count = document.getElementById("count");
let message = document.querySelector(".message");
let counter = 10;
function startTimer() {
    console.log("§");
    let interval1 = setInterval(() => {
        counter--;
        count.innerHTML = counter;
        if (counter == 0) {
            clearInterval(interval1);
            message.style.opacity = "0";
        }
    }, 1000);

}
window.onload = startTimer();