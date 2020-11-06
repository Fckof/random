window.onload=function() {
	let img=document.getElementById("img");
	img.setAttribute("src", localStorage.getItem("src"));
	//alert(localStorage.getItem('src'));
	
	img.style.opacity = localStorage.getItem("op");
	img.style.borderRadius = localStorage.getItem("round");
	img.style.transform='rotate('+localStorage.getItem("deg")+'deg)';  
}