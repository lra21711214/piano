var audio1 = new Audio("sound/do.mp3");
var audio2 = new Audio("sound/re.mp3");
var audio3 = new Audio("sound/mi.mp3");
var audio4 = new Audio("sound/fa.mp3");
var audio5 = new Audio("sound/so.mp3");
var audio6 = new Audio("sound/ra.mp3");
var audio7 = new Audio("sound/si.mp3");
var audio8 = new Audio("sound/takaido.mp3");
var audio9 = new Audio("sound/kokken1.mp3");
var audio10 = new Audio("sound/kokken2.mp3");
var audio11 = new Audio("sound/kokken3.mp3");
var audio12 = new Audio("sound/kokken4.mp3");
var audio13 = new Audio("sound/kokken5.mp3");
document.onkeydown = osu;


function narasu(num){
	eval("audio"+num+".play()");
	document.getElementById("kenban"+num).style.backgroundColor="yellow";
		setTimeout("hanasu("+num+")", 100);
}
function osu(){
	if(event.keyCode==65) {
		audio1.play();
		document.getElementById("kenban1").style.backgroundColor="yellow";
		setTimeout("hanasu(1)", 100);
	}
	if(event.keyCode==83) {  audio2.play();
		document.getElementById("kenban2").style.backgroundColor="yellow";
		setTimeout("hanasu(2)", 100);
	}
	if(event.keyCode==68) {
		audio3.play();
		document.getElementById("kenban3").style.backgroundColor="yellow";
		setTimeout("hanasu(3)", 100);
	}
	if(event.keyCode==70) {
		audio4.play();
		document.getElementById("kenban4").style.backgroundColor="yellow";
		setTimeout("hanasu(4)", 100);
	}	
	if(event.keyCode==71) {
		audio5.play();
		document.getElementById("kenban5").style.backgroundColor="yellow";
		setTimeout("hanasu(5)", 100);
	}
	if(event.keyCode==72) {
		audio6.play();
		document.getElementById("kenban6").style.backgroundColor="yellow";
		setTimeout("hanasu(6)", 100);
	}
	if(event.keyCode==74) {
		audio7.play();
		document.getElementById("kenban7").style.backgroundColor="yellow";
		setTimeout("hanasu(7)", 100);
	}
	if(event.keyCode==75) {
		audio8.play();
		document.getElementById("kenban8").style.backgroundColor="yellow";
		setTimeout("hanasu(8)", 100);
	}
	if(event.keyCode==87) {
		audio9.play();
		document.getElementById("kenban9").style.backgroundColor="yellow";
		setTimeout("hanasu(9)", 100);
	}
	if(event.keyCode==69) {
		audio10.play();
		document.getElementById("kenban10").style.backgroundColor="yellow";
		setTimeout("hanasu(10)", 100);
	}	
	if(event.keyCode==84) {
		audio11.play();
		document.getElementById("kenban11").style.backgroundColor="yellow";
		setTimeout("hanasu(11)", 100);
	}
	if(event.keyCode==89) {
		audio12.play();
		document.getElementById("kenban12").style.backgroundColor="yellow";
		setTimeout("hanasu(12)", 100);
	}
	if(event.keyCode==85) {
		audio13.play();
		document.getElementById("kenban13").style.backgroundColor="yellow";
		setTimeout("hanasu(13)", 100);
	}
}


function hanasu(num){
	if (num<=8){
		document.getElementById("kenban" + num).style.backgroundColor="white";	
	}else{
		document.getElementById("kenban" + num).style.backgroundColor="black";	
	
	}


}
