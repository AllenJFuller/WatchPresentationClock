import clock from "clock";
import document from "document";
import * as util from "../common/utils";
import { vibration } from "haptics";
import { display } from "display";

//Keep Screen On
display.autoOff = false;

// Update the clock every second
clock.granularity = "seconds";

// Label and Background Elements
const myLabel = document.getElementById("myLabel");
const backgroundRect = document.getElementById("backgroundRect");

// Corner Buttons
let btnTR = document.getElementById("btn-tr");
let btnBR = document.getElementById("btn-br");
let btnTL = document.getElementById("btn-tl");

// Variables needed to run the timer
var timerstart = 600;
var timer = timerstart;
var runtimer = 0;
var htimer = 0;
var mtimer = 0;
var stimer = 0;
var ytime = 300;
var rtime = 150;

// Settings Pop-up
let myPopup = document.getElementById("my-popup");
let btnLeft = myPopup.getElementById("btnLeft");
let btnRight = myPopup.getElementById("btnRight");
let btnLeft2 = myPopup.getElementById("btnLeft2");
let btnRight2 = myPopup.getElementById("btnRight2");
let btnLeft3 = myPopup.getElementById("btnLeft3");
let btnRight3 = myPopup.getElementById("btnRight3");

// Reset Button
btnTR.onactivate = function(evt) {
  timer = timerstart;
}

// Start and Stop Timer
btnBR.onactivate = function(evt) {
  if (runtimer === 1) {
    runtimer = 0;
  } else {
  runtimer = 1;
    if (timer === 0) {
      timer = timerstart;
    }
  }  
} 

// Using Clock to change the timer with each second
clock.ontick = (evt) => {
  //Star and stop timer
  if (runtimer === 1) {
    timer = timer - 1;
  }
  //Convert timer into hours, minutes, and seconds
  if (timer > 3600) {
    htimer = timer / 3600 | 0;
  } else {
    htimer = 0;
  }
  if (timer > 60) {
    mtimer = (timer - (htimer * 3600)) / 60 | 0;
  } else {
    mtimer = 0;
  }
  stimer = timer - (htimer * 3600) - (mtimer * 60);
  // Change Background color based on threasholds
  if (timer > ytime) {
    backgroundRect.style.fill = "fb-green";
  }
  if (timer < ytime) {
    backgroundRect.style.fill = "fb-peach";
  }
  if (timer < rtime) {
    backgroundRect.style.fill = "fb-red";
  }
  //Display Timer Over Pop-up
  if (timer === 0) {
    runtimer = 0;
    myLabel.text = 'Finished!';
    vibration.start("nudge");
  } else {
    myLabel.text = `${util.monoDigits(htimer)}:${util.monoDigits(util.zeroPad(mtimer))}:${util.monoDigits(util.zeroPad(stimer))}`;
  }
}

// Show the Settings Pop-up
btnTL.onactivate = function(evt) {
  myPopup.style.display = "inline";
}

// Setting Pop-up Buttons
btnLeft.onclick = function(evt) {
  timerstart = 600;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}

btnRight.onclick = function(evt) {
  timerstart = 900;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}

btnLeft2.onclick = function(evt) {
  timerstart = 1800;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}

btnRight2.onclick = function(evt) {
  timerstart = 3600;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}

btnLeft3.onclick = function(evt) {
  timerstart = 5400;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}

btnRight3.onclick = function(evt) {
  timerstart = 7200;
  timer = timerstart;
  ytime = .5 * timerstart;
  rtime = .25 * timerstart;
  myPopup.style.display = "none";
}
