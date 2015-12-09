/*js goes here*/
var socialMedia = {
	facebook: 'https://www.facebook.com',
	envelope: 'https://www.gmail.com',
	linkedin: 'https://www.linkedin.com/',
	github: 'https://github.com/',
	slack: 'https://slack.com/'
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


