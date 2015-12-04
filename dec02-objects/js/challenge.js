var person1 = new Person('Belia', 33, 'Pimpin Gloria'),
	person2 = new Person('Gloria', 21, 'Full Time Stipper'),
	person3 = new Person('Rachel', 12, 'Student'),
	person4 = new Person('Carrie', 26, 'Full Time Mom'),
	person5 = new Person('Tom', 49, 'Daddy');

function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}

var people = function(){
	for (var i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);