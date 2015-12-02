/*js goes here*/

var socialMedia = {
	twitter: 'https://twitter.com/Real_CSS_Tricks',
	flickr: 'https://www.flickr.com/photos/zeldman/18658541431',
	youtube: 'https://www.youtube.com/user/realcsstricks',
	facebook: 'https://www.facebook.com/CSSTricks/'
};


var social = function(){
	var output = '<ul>';
	var smiList = document.querySelectorAll('.smi');
	for(var key in arguments[0]){
		output += '<li><a href="' + socialMedia[key] + '" target="_blank"><i class="fa fa-' + key + '"></i></a></li>';
	}
	output += '</ul>';
	for(var i = 0; i < smiList.length; i++){
		smiList[i].innerHTML = output;
	}	
}(socialMedia);



var turtles = {
	botticelli: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/800px-Sandro_Botticelli_083.jpg',
	daVinci: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/LEONARDO.JPG',
	michaelangelo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelango_Portrait_by_Volterra.jpg/800px-Michelango_Portrait_by_Volterra.jpg',
	donatello: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cinque_maestri_del_rinascimento_fiorentino%2C_XVI_sec%2C_donatello.JPG/800px-Cinque_maestri_del_rinascimento_fiorentino%2C_XVI_sec%2C_donatello.JPG',
	bernini: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gian_Lorenzo_Bernini%2C_self-portrait%2C_c1623.jpg/800px-Gian_Lorenzo_Bernini%2C_self-portrait%2C_c1623.jpg',
	goya: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg/800px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg',
	picasso: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg',
	monet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg',
	renoir: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg'
};

var artists = function(){
	var output = '<ul>';
	var gallery = document.getElementsByClassName('gallery');
	for(var key in arguments[0]){
		output += '<li><img src="' + turtles[key] + '" alt="' + key + '"></li>';
	}
	output += '</ul>';
	for(var i = 0; i < gallery.length; i++){
		gallery[i].innerHTML = output;
	}
}(turtles);















/*function test(){
	console.log(arguments[1]);
}
test(5, 10)*/