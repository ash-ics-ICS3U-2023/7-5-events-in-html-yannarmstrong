/**
 * ICS3U 7.5 - Events in HTML/JS
 * Mr. J
 *
 * Make sure you read the lesson and watch the in-class demo.
 *
 * Author: YANN ARMSTRONG
 */

'use strict';

// Event Listeners and Globals
document.getElementById("over").addEventListener("mouseover", over)
document.getElementById("enter").addEventListener("mouseenter", enter)
document.getElementById("move").addEventListener("mousemove", move)

let mouseover_count = 0;
let mouseenter_count = 0;
let mousemove_count = 0;

function over() {
  document.getElementById("over_span").innerText = ++mouseover_count;
}

function enter() {
  document.getElementById("enter_span").innerText = ++mouseenter_count;
}

function move() {
  document.getElementById("move_span").innerText = ++mousemove_count;
}

// Secrete Button code
document.getElementById("btn_show_hide").addEventListener("click", show_text_click);

function show_text_click() {
    let hiddenDiv = document.getElementById("hidden_text");
    hiddenDiv.hidden = !hiddenDiv.hidden;
}

// Spacebar code
window.addEventListener("keydown", track_key);

function track_key(event) {
    if (event.key == " " || "h") {
        show_text_click();
    }
    console.log(event.key)
}

// DOOR STUFF
let doorImg = document.getElementById("door");

doorImg.addEventListener("mouseenter", function() {
    doorImg.src = "images/Screenshot 2024-06-13 13.52.25.png";
});

doorImg.addEventListener("mouseleave", function() {
    doorImg.src = "images/Screenshot 2024-06-13 13.52.51.png"; 
});