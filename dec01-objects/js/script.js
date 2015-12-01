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














/*function test(){
	console.log(arguments[1]);
}
test(5, 10)*/