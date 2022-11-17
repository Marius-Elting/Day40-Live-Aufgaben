// BOM: Browser Object Model

console.log(window);

// Benutzt niemand
// window.alert("Hello");

// let window1 = window.prompt("hallo");
// console.log(window1);

// größe des Browserfensters

console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);

// größe des gesamten screens bei desktops

console.log(window.screen.height);
console.log(window.screen.width);

let myWindow;
function openWindow() {
    //öffnet ein neues Fenster mit dem entsprechenden Link
    // "_self" sorgt dafür dass sich der link im gleichen Fenster öffnet
    // self,blank,parent,top sind weitere targets
    myWindow = window.open("https://www.google.de", "_self");
}
function closeWindow() {
    // schließt das Fenster wieder 
    myWindow.close();
}

function onLoadHandler() {
    // console.log("Window hat geladen");
    // window.alert("Welcome to my Page");
}

// sicherstellung dass das window Objekt schon geladenist
window.onload = onLoadHandler;


function scrollen() {
    console.log("lol");
    // window.scroll 1. x 2. y
    window.scroll(0, 1000);
}


// window.location
console.log(window.location.protocol);


function reloaden() {
    // console.log("first");
    window.location.reload();
}


function aboutpage() {
    window.location.pathname = "/assets/html/about.html";
}


console.log(window.history);

function goback() {
    window.history.back();
}

function goforward() {
    window.history.forward();
}


// JS Timing events

function myTimer() {
    const d = new Date();
    console.log(d.toLocaleTimeString("de-DE"));
}

// setInterval(function, timeout)
//TODO let timer = setInterval(myTimer, 1000);


function clearMyInterval() {
    // stoppt den Interval
    clearInterval(timer);
}
function hallo() {
    console.log("hello");

}

function sayHello() {
    setTimeout(
        hallo, 5000);
}

const train = document.querySelector("img");
let leftPos = 0;
let trainInterval;
function startTrain() {
    let animationTrain = () => {
        leftPos += 10;
        train.style.left = leftPos + "px";
    };
    trainInterval = setInterval(animationTrain, 100);
}

function stopTrain() {
    clearInterval(trainInterval);
};