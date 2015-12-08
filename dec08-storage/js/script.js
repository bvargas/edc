/*js goes here*/
var bodyObj = document.body,
	loginObj = document.querySelector('#login'),
	formObj = document.querySelector('#login form'),
	submitBtn = document.querySelector('#login input[type="submit"]');

loginObj.style.display = 'none';

if(typeof(Storage) !=='undefined'){
	if(localStorage.getItem('username') === null &&
		localStorage.getItem('password') === null){
		loginObj.style.display = 'block';
		
		var submitInfo = function(x){
			if(x.type === 'password'){
				var pass = btoa(x.value);
				localStorage.setItem('password', pass);
			}else{
				localStorage.setItem('username', x.value);
			}
		};
	}else{
		loginObj.style.display = 'block';
		formObj.elements[0].value = localStorage.getItem('username');
	}
}

if(loginObj){
	bodyObj.style.overflow = 'hidden';
}

submitBtn.addEventListener('click', function(evt){
	submitForm(evt);
});

var submitForm = function(e){
	e.preventDefault();
	// console.log('test');
	var formElems = formObj.elements;
	for(var i = 0; i < formElems.length-1; i++){
		// console.log(formElems[i].value);
		submitInfo(formElems[i]);
	}
};