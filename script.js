'use strict';



let hourArrow = document.querySelector('.hour-arrow');
let minArrow = document.querySelector('.minutes-arrow');
let secArrow = document.querySelector('.seconds-arrow');


function round() {
let time = new Date();
  
 let sec = time.getSeconds();
 let secAngle = sec * 6;
 secArrow.style.transform=`rotate(${secAngle}deg)`;

 let min = time.getMinutes();
 let minAngle = min * 6;
 minArrow.style.transform=`rotate(${minAngle}deg)`;

 let hour = time.getHours();

 let quarter;
 if (min <= 15) {
 	quarter = 7.5;
 } else if (min <=30) {
 	quarter = 15;
 } else if (min <=45) {
 	quarter = 22.5; 
 } else {
 	 quarter = 27;
 }
 
 let hourAngle = hour * 30 + quarter;
 hourArrow.style.transform=`rotate(${hourAngle}deg)`;
}
 
round ();
setInterval(round,1000)

let door = document.querySelector('.door');

function o () {
door.style.width="30px";
door.style.transform='rotateY(120deg)';
door.style.backgroundColor="#FFE4C4";
} 
function c () {
door.style.width="40px";
door.style.transform='rotateY(0deg)';
door.style.backgroundColor="#DEB887";
} 
