// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

  
// Logo Scroll Animation
gsap.registerPlugin(ScrollTrigger);

jQuery(document).ready(function($) {
	
	gsap.to('.logo_typo',{
		rotate: '20deg',
		scrollTrigger: {
			trigger: 'html',
			start: 'top top',
			end: 'bottom bottom',
			scrub: 1
		}
	});
	
	const buttons = gsap.utils.toArray('.switch-header-to-dark');
	buttons.forEach((btn) => {
	  gsap.from(btn, {
	    scrollTrigger: {
			start: 'top 15%',
			end: 'bottom 15%',
			trigger: btn,
			onEnter: () => $('header,.cursor-dot').addClass('color-is-switched'),
			onLeave: () => $('header,.cursor-dot').removeClass('color-is-switched'),
			onEnterBack: () => $('header,.cursor-dot').addClass('color-is-switched'),
			onLeaveBack: () => $('header,.cursor-dot').removeClass('color-is-switched'),
	    }
	  });
	});

});


