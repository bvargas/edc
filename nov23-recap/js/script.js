/*js goes here*/
/*var dropDown = document.querySelector('header nav ul #dropdown ul');

dropDown.addEventListener('click', showDrop);

function showDrop(){
	// dropDown.style.display = 'block';
}

// showDrop();*/
var htmlObj = document.getElementsByTagName('html')[0];
var dropDowns = document.getElementsByClassName('dropdown');
var optionsForm = document.getElementsByTagName('form')[0];
var submitBtn = document.querySelector('input[type="submit"]');
var navTimer;

optionsForm.addEventListener('click', function(evt){
	evt.stopPropagation(); //prevent event bubbling
});
submitBtn.addEventListener('click', getFormVals);


for(var i = 0; i < dropDowns.length; i++){
	(function(){
		dropDowns[i].addEventListener('mouseenter', delayDropdown);
		dropDowns[i].addEventListener('mouseleave', hideDropdown);
		function delayDropdown(){
			navTimer = window.setTimeout(showDropdown, 500, this);
		}
		function toggleDropdown(){
			this.classList.toggle('visible');
		}
		function showDropdown(x){
			clearTimeout(navTimer);
			x.classList.add('visible');
		}
	})();	
}
function hideDropdown(x){
	clearTimeout();
	this.classList.remove('visible');
}
function getFormVals(evt){
	var configArr = [];
	evt.preventDefault();
	for (var j = 0; j < optionsForm.elements.length - 1; j++){
		configArr.push(optionsForm.elements[j].value);
	}
	htmlObj.style.backgroundColor = configArr[1];
	hideDropdown(this.parentElement.offsetParent);	
}