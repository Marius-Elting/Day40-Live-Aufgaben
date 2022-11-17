let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let wochenTage = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];


setInterval(() => {
    let date1 = new Date("Februar 05, 2021 21:05:13");

    console.log(date1.getFullYear());
    console.log(date1.getMonth() + " Monat");
    console.log(date1.getDay() + " Tag");
    console.log(date1.getHours() + " Stunden");
    console.log(date1.getMinutes() + " Minuten");
    console.log(wochenTag[date1.getDay()]);
    console.log(monate[date1.getMonth()]);

    let date = new Date();
    let output = document.getElementById("clock");
    output.innerHTML = `${wochenTage[date.getDay()]} ${date.toLocaleTimeString("en-US")} `;
}, 100);

