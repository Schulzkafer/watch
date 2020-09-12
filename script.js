'use strict';



let hourArrow = document.querySelector('.hour-arrow');
let minArrow = document.querySelector('.minutes-arrow');
let secArrow = document.querySelector('.seconds-arrow');

let door = document.querySelector('.door');
let cuckoo = document.querySelector('.cuckoo');

let noAccess = false;

function roundSec() {
	let time = new Date();

	let sec = time.getSeconds();
	let secAngle = sec * 6;
	secArrow.style.transform = `rotate(${secAngle}deg)`;
}

roundSec();
let goClockSec = setInterval(roundSec,1000);

function roundMinHour() {
	let time = new Date();
	let min = time.getMinutes();
	let minAngle = min * 6;
	minArrow.style.transform = `rotate(${minAngle}deg)`;
	let hour = time.getHours();

	let quarter;
	if (min <= 15) {
		quarter = 7.5;
	} else if (min <= 30) {
		quarter = 15;
	} else if (min <= 45) {
		quarter = 22.5; 
	} else {
		quarter = 27;
	}

	let hourAngle = hour * 30 + quarter;
	hourArrow.style.transform = `rotate(${hourAngle}deg)`;
		if (min == 59 || min == 29) {
			clearInterval(goClockMinHour);
			goClockMinHour = setInterval(roundMinHour, 1000);
		}
		if (min == 0) {
		goBird(hour);
		clearInterval(goClockMinHour);
			goClockMinHour = setInterval(roundMinHour, 61000);
	} else if (min == 30){
		 goBird(1);
		 clearInterval(goClockMinHour);
			goClockMinHour = setInterval(roundMinHour, 61000);
	}
}

roundMinHour();
let goClockMinHour = setInterval(roundMinHour, 61000);

function o () {
	door.style.width = "30px";
	door.style.transform = 'rotateY(120deg)';
	door.style.backgroundColor = "#FFE4C4";
	cuckoo.style.height = '30px';
	cuckoo.style.width = '30px';
} 

function c () {
	door.style.width = "40px";
	door.style.transform = 'rotateY(0deg)';
	door.style.backgroundColor = "#DEB887";
	cuckoo.style.height = '20px';
	cuckoo.style.width = '20px';
} 

function goBird (timesToSing) {
	console.log(timesToSing)
	if (noAccess) return;
	noAccess = true;
	let times = 0;
	if (timesToSing < 0 || timesToSing > 23) {
		return;
	} else if (timesToSing > 12) {
		timesToSing = timesToSing - 12;
	} else if (timesToSing == 0) {
		timesToSing = 12;
	} 

	function go () {
		if (Math.round(times) == times) {
			o();
		} else {
			c();
		}
	}

	go();

	door.addEventListener('transitionend', function(evt) {
		if (evt.propertyName == 'transform') {
			times+=0.5;
			console.log(times)
			console.log(timesToSing)
			if (times >= timesToSing) {
				noAccess = false;
				return;
			}
			go();
		}
	});

}

door.onclick = function () {
	goBird(new Date().getHours());
}


