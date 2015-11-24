var htmlObj = document.getElementsByTagName('html')[0];
var litterBox = document.querySelector('.kittens div');
var guessBox = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('input[type="submit"]');
var resetBtn = document.querySelector('input[type="reset"]');
var badges = document.querySelectorAll('.guess .thumbs img');
var strayCats = 0;
var kittyPic = '<img src="img/kitten.png" alt="">';

// litterBox.innerHTML = kittyPic;

submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', clearGame);

function startGame(){
	litterBox.innerHTML = '';
	strayCats = randomNum(15);
	for (var i = 0; i < strayCats; i++) {
		litterBox.innerHTML += kittyPic;
	}	
}
startGame();

function submitGuess(evt){
	// evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGame(guess);
}
function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function checkGame(guess){
	if(!isNaN(parseInt(guess)) && guess == strayCats){
		getAward(true); 
	}else{
		getAward(false);
	}
}
function getAward(x){
	badges[+x].style.display = 'block';
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 40%, 40%, 1)';
	}else{
		htmlObj.style.backgroundColor = 'hsla(0, 50%, 50%, 1)';
	}
}
function clearGame(){
	litterBox.innerHTML = '';
	guessBox.value = '';
	guessBox.disabled = false;
	htmlObj.style.backgroundColor = 'white';
	startGame();
	for(var i = 0; i < badges.length; i++){
		badges[i].style.display = 'none';
	}
}
