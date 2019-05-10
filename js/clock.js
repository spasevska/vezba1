$(function () {

	function setDate() {
		const date = new Date();

		const mins = date.getUTCMinutes();
		const hour = date.getUTCHours();

		var minsDegrees;
		minsDegrees = (mins * 6) + 90;
		document.querySelector('.min-handLondon').style.transform = `rotate(${minsDegrees}deg)`;//London
		document.querySelector('.min-handNY').style.transform = `rotate(${minsDegrees}deg)`;//New York
		document.querySelector('.min-handToronto').style.transform = `rotate(${minsDegrees}deg)`//Toronto
		document.querySelector('.min-handHK').style.transform = `rotate(${minsDegrees}deg)`//Hong Kong
		document.querySelector('.min-handBucharest').style.transform = `rotate(${minsDegrees}deg)`//Bucharest
		document.querySelector('.min-handWarsaw').style.transform = `rotate(${minsDegrees}deg)`//Warsaw

		var hourDegrees;
		hourDegrees = (hour * 30) + 90;
		document.querySelector('.hour-handLondon').style.transform = `rotate(${hourDegrees}deg)`;//London
		hourDegrees -= minsDegrees;
		hourDegrees = (hour * 30 - 120) + 90;
		document.querySelector('.hour-handNY').style.transform = `rotate(${hourDegrees}deg)`;//New York
		document.querySelector('.hour-handToronto').style.transform = `rotate(${hourDegrees}deg)`//Toronto
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 240) + 90;
		document.querySelector('.hour-handHK').style.transform = `rotate(${hourDegrees}deg)`//Hong Kong
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 60) + 90;
		document.querySelector('.hour-handBucharest').style.transform = `rotate(${hourDegrees}deg)`//Bucharest
		hourDegrees -= hourDegrees;
		hourDegrees = (hour * 30 + 30) + 90;
		document.querySelector('.hour-handWarsaw').style.transform = `rotate(${hourDegrees}deg)`//Warsaw
	}

	setInterval(setDate, 1000);

	setDate();
});