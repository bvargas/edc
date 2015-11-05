/*js goes here*/


/*Project 1

var bodyObj = document.body,
	divObj = document.querySelector('main div'),
	shipobj = document.querySelector('main div:last-child');

bodyObj.addEventListener('keydown', function(evt){
	// console.log(evt.keyCode);
	var shipX = parseInt(shipobj.style.left);
	var shipY = parseInt(shipobj.style.top);
	if(evt.keyCode === 37){
		shipX = shipX - 5;
		shipobj.style.left = shipX+'%';
	}else if(evt.keyCode === 38){
		shipY = shipY - 5;
		shipobj.style.top = shipY+'%';
	}else if(evt.keyCode === 39){
		shipX = shipX + 5;
		shipobj.style.left = shipX+'%';
	}else if(evt.keyCode === 40){
		shipY = shipY + 5;
		shipobj.style.top = shipY+'%';
	}
});
bodyObj.addEventListener('click', function(evt){
	// console.log(evt);
	var mouseX = evt.x,
		mouseY = evt.y;
	// console.log(mouseX+', '+mouseY);
	moveBall(mouseX, mouseY);
});

function makeShip (){
	var shipW = '100px',
		shipH = '25px',
		shipClr = 'darkblue',
		shipX = '50%',
		shipY = '75%',
		shipPos = 'absolute',
		shipTrans = 'translated3d(-50%, -50%, 0)',
		shipSlide = 'all 500ms linear';

	shipobj.style.width = shipW;
	shipobj.style.height = shipH;
	shipobj.style.backgroundColor = shipClr;
	shipobj.style.left = shipX;
	shipobj.style.top =shipY;
	shipobj.style.position = shipPos;
	shipobj.style.transform = shipTrans;
	shipobj.style.transition = shipSlide;
}
makeShip();
function moveShip (x){
}
function makeBall (){
	var ballW = '50px',
		ballH = '50px',
		ballClr = 'violet',
		ballRadi = '100%',
		ballX = '100px',
		ballY = '100px',
		ballPos = 'absolute',
		ballTrans = 'translate3d(-50%, -50%, 0)',
		ballSlide = 'all 500ms ease-in-out';

	divObj.style.width = ballW;
	divObj.style.height = ballH;
	divObj.style.backgroundColor = ballClr;
	divObj.style.borderRadius = ballRadi;
	divObj.style.left = ballX;
	divObj.style.top = ballY;
	divObj.style.position = ballPos;
	divObj.style.transform = ballTrans;
	divObj.style.transition = ballSlide;
}
function moveBall(x, y){
	divObj.style.left = x+'px';
	divObj.style.top = y+'px';
	divObj.style.backgroundColor = 'hsla('+y+', 40%, 60%, 1)';
}
makeBall();*/


/*// Project 2

var formObj = document.getElementsByTagName('form')[0],
	formEls = formObj.length,
	submitBtn = formObj.querySelector('input[type="submit"]');

submitBtn.addEventListener('click', function(evt){
	evt.preventDefault();
	getInfo();
});

function getInfo(){
	var formInfo,
		formArr = [];
	console.log(formEls);
	for(var i = 0; i < formEls; i++){
		formInfo = formObj.elements[i].value;
		if(!!formInfo){
			formArr.push(formInfo);
		}
	}
	console.log(formArr);
}*/

// Project 3

var payBtn = document.getElementById('pay'),
	mainObj = document.getElementsByTagName('main')[0];

payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff =
		'<form>'+
		'<div>'+
		'<input type="text" name="first_name" placeholder="first name">'+
		'<input type="text" name="last_name" placeholder="last name">'+
		'</div>'+
		'<div>'+
		'<input type="text" name="address" placeholder="street address">'+
		'</div>'+
		'<div>'+
		'<input type="text" name="city" placeholder="city">'+
		'<input type="text" name="state" placeholder="state">'+
		'<input type="text" name="zip" placeholder="zip">'+
		'</div>'+
		'<label for="cc">'+
		'<input type="text" name="cc">'+
		'<input type="text" name="cc">'+
		'<input type="text" name="cc">'+
		'<input type="text" name="cc">'+
		'</label>'+
		'<div>'+
		'<input type="text" name="amount" placeholder="$amount">'+
		'<input type="submit" name="btn">'+
		'</div>'+
		'</form>';
	mainObj.innerHTML = formStuff;

	var formObj = document.getElementsByTagName('form')[0],
		formEls = formObj.length,
		submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		getInfo();
	});

	function getInfo(){
		var formInfo,
			formArr = [];
		console.log(formEls);
		for(var i = 0; i < formEls; i++){
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
			}
		// console.log(formArr);
		}
		function thankYou(){
			alert("Thank You "  + formArr[0] + " " + formArr[1]);
		}
		thankYou();
	}
}