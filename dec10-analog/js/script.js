/*js goes here*/
var copyrightDate = document.querySelector('footer span'),
	secondHand = document.querySelector('#second'),
	minuteHand = document.querySelector('#minute'),
	hourHand = document.querySelector('#hour'),
	currYear = new Date(),
	year = currYear.getFullYear(),
	timerId = window.setInterval(getTime, 1000),
	aSec = 360/60,
	anHour = 360/12;

function getTime(){
	var thisYear = new Date();
	var thisHour = (thisYear.getHours() * anHour);
	var thisMin = (thisYear.getMinutes() * aSec);
	var thisSec = (thisYear.getSeconds() * aSec);
	
	secondHand.style.transform = 'translate3d(-24%, 0, 0) rotate('+thisSec+'deg)';
	minuteHand.style.transform = 'translate3d(-24%, 0, 0) rotate('+thisMin+'deg)';
	hourHand.style.transform = 'translate3d(-24%, 0, 0) rotate('+thisHour+'deg)';
}
copyrightDate.textContent = year;


