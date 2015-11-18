/*js goes here*/
var divImg = document.querySelector('.kittens div');
var guessBox = document.querySelector('input[type="text"]');
var submitBtn = document.querySelector('input[type="submit"]');
var math = Math.random();
var imgKit = '<img src="img/kitten.png" alt="">';

// divImg.innerHTML = imgKit;

submitBtn.addEventListener('click', submitGuess);

function submitGuess(evt){
	// evt.preventDefault();
	var guess = guessBox.value;
	checkGuess(guess);
}

function checkGuess(num){
	if(num == 5){
		console.log(true);
	}else{
		console.log(false);
	}
}

