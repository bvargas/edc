/*js goes here*/

/*var p = prompt("what is your name");

if(!p){
	console.log(p);
	console.log(typeof p);
}*/

var name = prompt("what is your name?");
	color = 0,
	brown = "People with brown eyes are very wise. They don't let anyone tell them what to do, and they like to be the center of attention. They are very funny and are good at making people laugh and cheering them up. They are good at making new friends. They are very kind and mysterious. They are creative and have AMAZING fashion sense. Their weak point is that they can be too shy to let people know how they feel.",
	hazel = "People with hazel eyes never pass up a challenge, and are good at trying new things. They are very diverse. They are very nice until you make them mad, then you need to watch out. They are generally very outgoing and sweet. They are energetic and have a reason for everything. They are compassionate and loyal as well as romantic. They are very lovable and don't care what people think/say about them. They definitely like to be called beautiful instead of hot. Hazel eyed people are also the best in bed.",
	green = "People with green eyes are the most passionate in relationships. Their relationships tend to be very long. They are trustworthy and love to make people laugh. They love adventure and nature. They get jealous occasionally. Saying something mean about them to their face will usually end up with it coming back to you in some sort of smart come-back. They have a very deep soul and love the ocean.",
	blue = "People with blue eyes are kind hearted and always look for the best in others. They will love with all their heart and are the type of people who are hard to forget. They are the best at pretending to be happy during hard times and will tend to please others before themselves.";

console.log(name);
console.log(typeof name);
if(name === 'null' || name ===''){
	// console.log("they clicked cancel");
	alert("just enter your name already");
}else{
	color = prompt("what color are your eyes?");
	if(color ==='null' || color === ''){
		alert("please start over again");
		name = prompt("what is your name?");
		color = prompt("what color are your eyes?");
	}else if(color === 'green'){
		document.write(green)	
	}else if(color === 'brown'){
		document.write(brown)
	}else if(color === 'blue'){
		document.write(blue)
	}else if(color === 'hazel'){
		document.write(hazel)
	}else{
		alert("put a real color")
		color = prompt("what color are your eyes?")
	}
}


// var name = prompt("what is your name?");
// console.log(name);
// if(name === 'null' || name ===''){
// 	// console.log("they clicked cancel");
// 	alert("just enter your name already");
// }else{
// 	alert("Thank you " + name);
// }

// var x = 5,
// 	y = 10,
// 	z,
// 	name = "belia";
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(x + y);
// console.log(x + " " + y);
// console.log(x + "" + y);
// console.log(name);
// console.log(name + x);

// NaN: not a number
// null: has no value

// var p = prompt("are you ready?");
// console.log(p);

// var c = confirm("are you ready?");
// console.log(c);

// Data Types{
	// Boolean: true false
	// String: "anything inside quotation marks"
	// Integer: whole number
	// Float: number with decimal
	// Array: list of things - indentified w/ []
	// Object: collection of property & values -identified w/ {}
// }