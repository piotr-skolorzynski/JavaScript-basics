// js timers

const myMessage = document.getElementById('message');

function showMessage(){
    myMessage.className = 'show';
} 

setTimeout(showMessage, 3000);


// ---------------------

const colourChanger = document.getElementById('colour-changer');
const colours = ["red", "blue", "green", "pink"];
let counter = 0; //shows position in array

function changeColour() {
    colourChanger.style.backgroundColor = colours[counter];
    if (counter == colours.length) {
        counter = 0;
    } else {
        counter++;
    }        
};

let myTimer = setInterval(changeColour, 3000);

// how to stop timer

colourChanger.onclick = function() {
    clearInterval(myTimer);
    colourChanger.innerHTML = 'Timer stopped';
};