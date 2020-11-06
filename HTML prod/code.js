var _url;
var op;
var degr=0;
var round;
function set_image() {
	let url=document.getElementById('url');
	let image=document.getElementById("image");
	_url=url.value;
	image.setAttribute('src',url.value);
	//alert(image.getAttribute('src'));
}

function round_img() {
	let img=document.querySelector('#image');
	img.style.borderRadius="50%";
	round="50%";
}

function unround_img() {
	let img=document.querySelector('#image');
	img.style.borderRadius="0";
	round="0";
}
function set_opacity(num) {
	let img=document.querySelector('#image');
	switch(num){
		case 20:img.style.opacity='20%';op="20%"; break;
		case 40:img.style.opacity='40%';op="40%";break;
		case 60:img.style.opacity='60%';op="60%";break;
		case 80:img.style.opacity='80%';op="80%";break;
		case 100:img.style.opacity='100%';op="100%";break;
	}
}
function turn(deg) {
	degr+=deg;
	//alert(degr);
	let img=document.querySelector('#image');
	img.style.transform='rotate('+degr+'deg)';
}

function next_page() {
	let img=document.getElementById("image");
	if(img.getAttribute('src')!=_url){
		alert("Не выбрал изображение")
	}else{
		window.location='image.html';
		localStorage.setItem("src", _url);
		localStorage.setItem("op",op);
		localStorage.setItem("round", round);
		localStorage.setItem("deg", degr);
		//alert(localStorage.getItem('src'));

	}

	
}