/*
   document.querySelector(".prevBtn").addEventListener("click", () => {
      changeSlides(-1);
   });
   document.querySelector(".nextBtn").addEventListener("click", () => {
      changeSlides(1);
   });
   var slideIndex = 1;
   showSlides(slideIndex);
   function changeSlides(n) {
      showSlides((slideIndex += n));
   }
   function currentSlide(n) {
      showSlides((slideIndex = n));
   }
   function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("quote-slide");
      var dots = document.getElementsByClassName("Navdot");
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }
      Array.from(slides).forEach(item => (item.style.display = "none"));
      Array.from(dots).forEach(
         item => (item.className = item.className.replace(" selected", ""))
      );
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " selected";
   }
*/



jQuery(document).ready(function($) {

	$startSlider = $('.start__slider');
	
	$startSlider.on('init', function(slick){
		$('.video-progress-bar').css('width','0%');
		var video = $('.slick-current.slick-active video').get(0);
		console.log('init');
		video.play();
		
		video.addEventListener('ended', function(){
			setTimeout(function(){
				$startSlider.slick('slickNext');
			}, 300);
		}, false);
		
		video.addEventListener("timeupdate", function() {
			//console.log('Duration: '+video.duration);
			//console.log('Time: '+video.currentTime);
			$('.slick-current.slick-active .video-progress-bar').css('width', (100 / video.duration) * video.currentTime + '%');
		});
	});
	
	$startSlider.on('afterChange', function(event, slick, currentSlide){
		$('.video-progress-bar').css('width','0%');
		var video = $('.slick-current.slick-active video').get(0);
		video.play();
		
		video.addEventListener('ended', function(){
			setTimeout(function(){
				$startSlider.slick('slickNext');
			}, 300);
		}, false);
		video.addEventListener("timeupdate", function() {
			$('.slick-current.slick-active .video-progress-bar').css('width', (100 / video.duration) * video.currentTime + '%');
		});
	});


	$startSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false
	});
	



  var time = 10;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.quotes__wrapper');
  $slick.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
  });
  
  $bar = $('.progress-quote-bar');
  
  $('.quotes__wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  

		
});