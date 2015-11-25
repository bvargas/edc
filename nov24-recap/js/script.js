var bodyObj = document.body;
var togObj = document.getElementsByClassName('toggle')[0];
var winObj = window;
var headerObj = document.getElementsByTagName('header')[0];
var navObj = document.getElementsByTagName('nav')[0];
var mainObj = document.getElementsByTagName('main')[0];

winObj.addEventListener('scroll', scrollDist);

function scrollDist(){
	var scrollHeight = winObj.scrollY;
	var headerHeight = headerObj.clientHeight;
	var navHeight = navObj.clientHeight;
	if(scrollHeight > headerHeight){
		navObj.classList.add('fixed');
		mainObj.style.paddingTop = navHeight + 'px';
	}else{
		navObj.classList.remove('fixed');
		mainObj.style.paddingTop = '0px';
	}
}

togObj.addEventListener('click', function(){
	bodyObj.classList.toggle('daytheme');
});

console.log(bodyObj);