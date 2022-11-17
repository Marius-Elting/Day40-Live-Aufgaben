console.log("Start warten für 3 Sekunden");


setTimeout(() => {
    console.log("start"), 3000;
}, 3000);


setInterval(() => {
    const d = new Date();
    console.log(d.toLocaleTimeString("de-DE"));
}, 1000);

let i = 10;
let interval1 = setInterval(() => {
    if (i < 0) {
        console.log("endlich FeierAbend!");
        clearInterval(interval1);
        return;
    }
    console.log(i);
    i--;
}, 1000);