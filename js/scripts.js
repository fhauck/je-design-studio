// noinspection
Splitting();

jQuery(document).ready(function($) {

	$('#navMenu').click(function (){
		$(this).toggleClass('is-active');
		$('#overlayMenuContainer').toggleClass('show');
		$('.cursor-dot').toggleClass('is-pink');
	});

	var loadingTimeline = gsap.timeline();
	
	gsap.set('.loadingLogo',{
		opacity: 1
	});
	
	loadingTimeline.to('.loadingLogo .char',{
		opacity: 1,
		y: '0%',
		stagger: 0.1,
		duration: 1
	});
	
	loadingTimeline.to('.loadingLogo .char',{
		marginLeft: '0.3em',
		marginRight: '0.3em',
		duration: 2
	});
	
	
	loadingTimeline.to('.loadingLogo .char',{
		opacity: 0,
		stagger: 0.1,
		duration: 0.4,
		delay: -0.5
	});

	loadingTimeline.to('.loadingBackground',{
		opacity: 0,
		duration: 1.4,
		delay: -0.9,
		onComplete: function(){
			$('#loadingScreen').remove();
		}
	});
	
	$('#btn-scroll-top').click(function () { // Klick auf den Button
	   $('body,html').animate({
		  scrollTop: 0
	   }, 800);
	   return false;
	});

});

$(window).scroll(function () {
   if ($(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
	  $('#btn-scroll-top').fadeIn();
   } else {
	  $('#btn-scroll-top').fadeOut();
   }
});


$(window).on("load", function (e) {	

});

