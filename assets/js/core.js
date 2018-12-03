$(document).ready(function(){
	// slow scrill to top section
	$("#sayHello_sect").on("click","#linktoup", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// portfolio items links
	$(".portf-item").hover(function (event) {
		event.preventDefault();

		var btn = $(this).children(".btn-sm");
		// btn.css("display", "flex");
		btn.css("opacity", "1");

	}, function() {
			var btn = $(this).children(".btn-sm");
			// btn.css("display", "none");
			btn.css("opacity", "0");

	});

	// testimonial carusele
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("slide-content");
		var dots = document.getElementsByClassName("indc");
		for (i = 0; i < slides.length; i++) {
		   slides[i].style.display = "none";  
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}    
		for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "flex";  
		dots[slideIndex-1].className += " active";
		setTimeout(showSlides, 4000); // Change image every 2 seconds
	}
});