/*js goes here*/

/*for(var i = 1; i < 10; i++){
	console.log("belia");
}

for(var i = 1; i <=10; i++){
	console.log("sahmayah");
}

for(var i = 1; i<=10; i++){
	console.log(i);
}*/
/*
var loopNum = prompt("Please provide a number"),
	isNum;
if(!!loopNum){
	isNum = +loopNum;
	if(!NaN){
		for(var i = 1; i <= isNum; i++){
			var result = '';
			if (i % 3 === 0){
				result += 'Fizz';
			}
			if (i % 5 === 0){
				result += 'Buzz';
			}
			console.log(result || i);
		}
	}
}*/

var fn = prompt("What is your first name?"),
	mn = prompt("What is your middle name?"),
	ln = prompt("What is your last name?");

console.log(fn + " " + mn + " " + ln);

var username,
	password,
	online;
online = confirm("please confirm");
if(!online){
	username = prompt("what is username");
	password = prompt("what is password");
	document.write("hello," + username);
}