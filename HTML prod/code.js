
function set_image() {
	let url=document.getElementById('url');
	let image=document.getElementById("image");
	image.setAttribute('src',url.value);
	//alert(image.getAttribute('src'));
}

function round_img() {
	let img=document.getElementById('image');
	img.classList.remove("unround_img");
	img.classList.add("round_img");
}

function unround_img() {
	let img=document.getElementById('image');
	img.classList.remove("round_img");
	img.classList.add("unround_img");
}
function set_opacity(num) {
	let img=document.querySelector('#image');
	switch(num){
		case 20:img.style.opacity='20%';break;
		case 40:img.style.opacity='40%';break;
		case 60:img.style.opacity='60%';break;
		case 80:img.style.opacity='80%';break;
		case 100:img.style.opacity='100%';break;
	}
}
var degr=0;
function turn(deg) {
	degr+=deg;
	//alert(degr);
	let img=document.querySelector('#image');
	img.style.transform='rotate('+degr+'deg)';
}