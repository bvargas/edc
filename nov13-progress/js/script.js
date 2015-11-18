/*js goes here*/
var bodyObj = document.bodyObj,
	mainObj	= document.getElementsByTagName('main')[0],
	navObj = document.getElementsByTagName('nav')[0],
	progressBar = document.getElementById('progressBar');

var bodyH = 0,
	mainH = 0;

window.addEventListener('resize', checkDim);
window.addEventListener('scroll', checkScroll);

function checkDim(){
	bodyH = document.body.clientHeight;
	mainH = mainObj.clientHeight;
}
checkDim();

function checkScroll(){
	var scrollPos = window.scrollY;
	var docUnit = Math.ceil((100 / mainH) * 100)/100;
	var docPos = (scrollPos * docUnit);
	if(docPos <= 150){
		console.log(docPos);
		progressBar.style.width =  docPos + '%';
	}
}
