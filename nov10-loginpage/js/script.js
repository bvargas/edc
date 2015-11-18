var bodyObj = document.body,
	mainObj = document.getElementsByTagName('main')[0],
	timerId = window.setTimeout(displayLogin, 5000);
	
/*
	submitBtn = document.querySelector('#loginBox input[type="submit"]'),
	formObj = document.querySelector('#loginBox form');
	
	usernameInput = document.getElementById('username'),
	passwordInput = document.getElementById('password');
*/

var formMarkup = 
	'<div id="loginBox">'+
		'<form>'+
			'<label for="username">'+
				'<span>username</span>'+
				'<input id="username" type="text">'+
				'<small></small>'+
			'</label>'+
			'<label for="password">'+
				'<span>password</span>'+
				'<input id="password" type="password">'+
				'<small></small>'+
			'</label>'+
			'<label for="email">'+
				'<span>email</span>'+
				'<input id="email" type="text">'+
				'<small></small>'+
			'</label>'+
			'<label for="number">'+
				'<span>phone number</span>'+
				'<input id="number" type="text">'+
				'<small></small>'+
			'</label>'+
			'<input class="button" type="submit" value="Submit">'+
		'</form>'+
	'</div>';

bodyObj.addEventListener('mousemove', checkDim);

function checkDim(evt){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    
    var hue = (mouseY / winH) * 360;
    var lum = (mouseX / winW) * 100;
    
    bodyObj.style.backgroundColor = 'hsla('+ hue +', '+ lum +'%, '+ lum +'%, 1 )';
}

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = formMarkup;
	var submitBtn = document.querySelector('#loginBox input[type="submit"]'),
		formObj = document.querySelector('#loginBox form');

	submitBtn.addEventListener('click', function(evt){
	    evt.preventDefault();
	    var els = formObj.elements, 
	    	len = els.length - 1,
	    	arr = [];

	    for(var i = 0; i < len; i++){
	    	if(!els[i].value){
	    		els[i].nextElementSibling.innerHTML = 'Field is empty'
	    	}else{
	    		arr.push(els[i].value);	
	    	}
	    }
	    console.log(arr);
	    // var unVal, pwVal;
	    // unVal = usernameInput.value;
	    // pwVal = passwordInput.value;

	    // console.log(unVal + ', ' + pwVal);
	});
}

/*
	submitBtn.addEventListener('click', function(evt){
	    evt.preventDefault();
	    var els = formObj.elements, 
	    	len = els.length - 1,
	    	arr = [];

	    for(var i = 0; i < len; i++){
	    	if(!els[i].value){
	    		els[i].nextElementSibling.innerHTML = 'Field is empty'
	    	}else{
	    		arr.push(els[i].value);	
	    	}
	    }
	    console.log(arr);
	    // var unVal, pwVal;
	    // unVal = usernameInput.value;
	    // pwVal = passwordInput.value;

	    // console.log(unVal + ', ' + pwVal);
	});
*/