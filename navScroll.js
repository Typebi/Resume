var scrollChecker = true;
function scroll(){
	if ($(document).scrollTop() < $('#personality').offset().top-150) {
		$('.nav-a').removeClass('active');
		$('.nav-about').addClass('active');
	}else if($(document).scrollTop() < $('#skills').offset().top-150) {
		$('.nav-a').removeClass('active');
		$('.nav-personality').addClass('active');
	}else if($(document).scrollTop() < $('#history').offset().top-150) {
		$('.nav-a').removeClass('active');
		$('.nav-skills').addClass('active');
	}else if($(document).scrollTop() < $('#works').offset().top-150) {
		$('.nav-a').removeClass('active');
		$('.nav-history').addClass('active');
	}else if($(document).scrollTop() < $('#contact').offset().top-150) {
		$('.nav-a').removeClass('active');
		$('.nav-works').addClass('active');
	}else{
		$('.nav-a').removeClass('active');
		$('.nav-contact').addClass('active');
	}
}
$(document).ready(function(){
	$('a').on('click', function(event) {
		var hash = this.hash;
		scrollChecker = false;
		$('html, body').animate({
				scrollTop: $(hash).offset().top
		}, 600);
		event.preventDefault();
		setTimeout(function(){
			scroll();
			scrollChecker = true;
		}, 600);
	});
});
$(document).ready(scroll);
$(window).scroll(function (){
	if(scrollChecker){
		scroll();
	}
});