/*js goes here*/
'use strict';
var Recipe = function(title, time, temp, ingredients, image){
	this.title = title;
	this.time = time;
	this.temp = temp;
	this.ingredients = ingredients;
	this.image = image;
};

Recipe.prototype.card = 'orchid';
Recipe.prototype.loveMethod = function(){
	console.log('I Love ' + this.title );
}

var recipe1 = new Recipe('apple pie', 35, 350, ['apples', 'flour', 'butter', 'sugar', 'cinnamon', 'brown sugar'], '../img/album-apple.jpg');
var recipe2 = new Recipe('lemon chicken', 45, 400, ['lemons', 'pepper', 'chicken', 'salt'], '../img/album-chicken.jpg');
var recipe3 = new Recipe('sugar cookies', 35, 375, ['sugar', 'eggs', 'flour', 'butter', 'salt'], '../img/album-cookies.jpg');
var recipe4 = new Recipe('nebraskan enchiladas', 25, 350, ['flour tortillas', 'cheese', 'onions', 'peas', 'red sauce'], '../img/album-enchiladas.jpg');
var recipe5 = new Recipe('pizza', 20, 425, ['pizza dough', 'pepperoni', 'cheese', 'olives', 'bell pepper', 'mushrooms'], '../img/album-pizza.jpg');

var printRecipe = function(){
	var mainObj = document.getElementsByTagName('main')[0];
	
	for (var i = 0; i < arguments.length; i++){
		var recipeCard = document.createElement('div');
		recipeCard.className = 'recipeCard';
		
		arguments[i].loveMethod();
		
		var recipe = 
			'<div class="img" style="background-image: url('+arguments[i].image+');"></div>'+
			'<div class="content" style="background-color: '+arguments[i].card+'">'+
			'<h1>'+ arguments[i].title +'</h1>'+
			'<ol>'+
				'<li>Cooking Time: '+ arguments[i].time+'</li>'+
				'<li>Cooking Tempature: '+ arguments[i].temp +'</li>'+
			'</ol>'+
			'<ul>';
			for (var j = 0; j< arguments[i].ingredients.length; j++){
				recipe += '<li>'+ arguments[i].ingredients[j] +'</li>';
			}
			recipe += '</ul></div>';
		mainObj.appendChild(recipeCard).innerHTML = recipe;
	}
}(recipe1, recipe2, recipe3, recipe4, recipe5);

