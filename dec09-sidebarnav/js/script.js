/*js goes here*/
var globalObj = document.querySelector('#global'),
	menuToggleBtn = document.querySelector('#menuToggleBtn'),
	menuHideBtn = document.querySelector('#menuHideBtn');

menuToggleBtn.addEventListener('click', function(){
	globalObj.classList.toggle('toggleMenu');
});
menuHideBtn.addEventListener('click', function(){
	globalObj.classList.toggle('hideMenu');
});