var htmlObj = document.querySelector('html');
var inputBox = document.querySelector('input[type="text"]');
var colorBox = document.querySelector('input[type="color"]');
var dateBox = document.querySelector('input[type="date"]');
var submitBtn = document.getElementsByTagName('button')[0];

submitBtn.addEventListener('click', function(){
	var val = inputBox.value;
	var colVal = colorBox.value;
	var dateVal = dateBox.value;
	getName(val);
	getColor(colVal);
	myDate(dateVal);
});

/*inputObj.addEventListener('blur', inputGrab);
function inputGrab(){
	var valIn = inputObj.value;
	console.log(valIn);
}*/

function getName(x){
	var resp = parseInt(x);
	if(!isNaN(resp)){
		console.log(true);
	}
	// console.log(parseInt(x) + 5);
}

function getColor(y){
	htmlObj.style.backgroundColor = y;
}

function myDate(z){
	console.log(z);
}