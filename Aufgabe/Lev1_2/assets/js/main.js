let button = document.getElementById("btn");
let percent = document.querySelector(".zeit");

let perc = 100;
button.addEventListener("click", () => {
    let interval1 = setInterval(() => {
        if (perc <= 0) {
            console.log(penis);
            clearInterval(interval1);
            reuturn;
        }

        perc--;
        percent.innerHTML = perc + "%";
    }, 100);

});