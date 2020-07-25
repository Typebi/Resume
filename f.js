function showImg(ans, objName) {
	var obj = document.getElementById(objName); 
	obj.style.display = ans && "block" || "none";
}
function moveImg(objName) {
	var obj = document.getElementById(objName); 
	if (obj.style.display == "block") {
		obj.style.left = event.clientX + document.documentElement.scrollLeft - 250 + "px";
		obj.style.top = event.clientY + document.documentElement.scrollTop + 25 + "px";
	}
}
function mouseOver(ans, obj1, obj2) {
	var obj1 = document.getElementById(obj1);
	var obj2 = document.getElementById(obj2);
	obj1.style.display = ans && "block" || "none";
	obj2.style.display = ans && "none" || "block";
}
var topbarToggle = false;
function menuClick(ans){
	topbarToggle = !topbarToggle;
	var obj = document.getElementById("topbar-menu");
	obj.style.display = topbarToggle && "block" || "none";
}