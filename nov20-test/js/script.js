/*js goes here*/
var dropDown = document.querySelector('nav ul .drop ul');
console.log(dropDown);

dropDown.addEventListener('mouseenter', hideDrop);

function hideDrop(){
	dropDown.style.display = 'none';
}

hideDrop();