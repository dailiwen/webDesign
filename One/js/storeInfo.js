var showBigPicture = document.getElementById('leftPicture');
showBigPicture.onclick = function(){
	document.getElementById('BigPicture').style.display = "block";
}

var out = document.getElementById('out');
out.onclick = function(){
	document.getElementById('BigPicture').style.display = "none";
}

var show = document.getElementById('showPicture');
show.onclick = function(){
	document.getElementById('BigPicture').style.display = "block";
}