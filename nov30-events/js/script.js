/*js goes here*/
var imgGrid = document.querySelector('#art-eliminator ul');
imgGrid.addEventListener('click', function(evt){
	var howmany = this.childElementCount;
	if(evt.target.tagName === 'IMG'){
		if(howmany > 1){
			var removeTarget = evt.target.parentElement;
			removeTarget.parentElement.removeChild(removeTarget);	
		}else{
			var photoTitle = evt.target.alt;
			document.querySelector('#art-eliminator p').innerHTML = photoTitle;
		}	
	}
});

document.querySelector('#art-preview ul').addEventListener('mouseover', function(evt){
	if(evt.target.tagName === "IMG"){
		var myDiv = document.createElement('div');
		myDiv.className = 'preview';
		evt.target.parentElement.appendChild(myDiv);

		var myImage = document.createElement('img');
		var imgUrl = evt.target.src;

		myImage.src = imgUrl.replace('85/85', '300/300');
		myDiv.appendChild(myImage);

		evt.target.addEventListener('mouseout', function mouseoutFunction(e){
			var myPreview = e.target.parentElement.querySelector('div.preview');
			myPreview.parentElement.removeChild(myPreview);
			this.removeEventListener('mouseout', mouseoutFunction);
		});
	}
});

document.querySelector('#art-follow ul').addEventListener('contextmenu', function(evt){
	evt.preventDefault();
	if(evt.target.tagName === "IMG"){
		var myDiv = document.createElement('div');
		myDiv.className = 'preview';
		evt.target.parentElement.appendChild(myDiv);

		var myImage = document.createElement('img');
		var imgUrl = evt.target.src;

		myImage.src = imgUrl.replace('85/85', '300/300');
		myDiv.style.left = evt.offsetX + 15 + 'px';
		myDiv.style.top = evt.offsetY + 15 + 'px';
		myDiv.appendChild(myImage);

		evt.target.addEventListener('mouseout', function mouseoutFunction(e){
			var myPreview = e.target.parentElement.querySelector('div.preview');
			myPreview.parentElement.removeChild(myPreview);
			this.removeEventListener('mouseout', mouseoutFunction);
		});
		evt.target.addEventListener('mousemove', function(f){
			console.log(f);
			myDiv.style.left = f.offsetX + 15 + 'px';
			myDiv.style.top = f.offsetY + 15 + 'px';
		});
	}
});