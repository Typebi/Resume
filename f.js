function showTOEIC(ans, objName) {
	var obj = document.getElementById(objName); 
	if(ans) { 
		obj.style.top = window.event.clientY + document.body.scrollTop + 10; 
		obj.style.left = window.event.clientX + document.body.scrollLeft + 10; 
		obj.style.display = "block"; 
	}else { 
		obj.style.display = "none"; 
	}
}
function moveTOEIC(objName) {
	var obj = document.getElementById(objName); 
	if (obj.style.display == "block") {
		obj.style.top = window.event.clientY + document.body.scrollTop + 10; 
		obj.style.left = window.event.clientX + document.body.scrollLeft + 10;
	}
}