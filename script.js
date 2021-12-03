var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

function generateBackground(){
	var c1 = Math.random()*256;
	var c2 = Math.random()*256;
	var c3 = Math.random()*256;
	var rgbColor = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
	body.style.background = rgbColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", generateBackground);
