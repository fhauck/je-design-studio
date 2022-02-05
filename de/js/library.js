 
// ON MOUSE OVER
$(document).on(
{
	mouseenter: function () {
	 
	// SET OPACITY TO 70%
		$(this).find(".roll").stop().animate({
			opacity: .7
			}, "slow");
		},
	mouseleave: function() {
		 
		// SET OPACITY BACK TO 50%
		$(this).find(".roll").stop().animate({
			opacity: 0
			}, "slow");
		}
}, ".picture" );


$(document).ready(function() { 


	function scrollToTarget(target, scroll) {
		// Get h2's margin-top and convert it to integer (number)
		h2margin = parseInt($(target).find('h2').css('marginTop'));

		if (scroll) {
		    $('html, body').animate({
		        scrollTop: ( $(target).offset().top - h2margin ),
		    }, 800);
		} else {
			$('html, body').scrollTop( $(target).offset().top - h2margin );
		}
	}

	$('#burgermenu').click(function(){
		$(".menu").toggleClass("active");
		$("body").toggleClass("noscroll");
		$(".menu__toggler").toggleClass("active");
		$("#burgermenu").toggleClass("close-hamburguer");
	});

	// ANCHOR-LINK
	$('a.anchor').click(function(){
		target = $(this).attr('href');
		scrollToTarget(target, true);
	    return false;
	});

	// SKIPP-BUTTON
	$("footer > .button").click(function(e) {
		e.preventDefault();
		var button = $(this);
		var articles = $("#wrapper > article");
		var article;
		var offset;
		articles.each(function() {
			offset = $(this).position().top;
			if ($(this).attr('id') !== 'contact') {
				offset -= 0;
			}
			
			if (offset - $(window).scrollTop() > 0) {
				article = $(this);
				return false;
			}
		});

		if ((articles.last().height() + articles.last().position().top) === ($(window).scrollTop() + $(window).height())) {
			article = undefined;
			offset = 0;
		}

		if (article !== undefined) {
			$('html, body').animate({
				scrollTop: offset
 			});
 			if (articles.index(article) + 1 === articles.length) {
 				button.css('transform', 'rotate(180deg)');
 			}
		} else {
			$('html, body').animate({
				scrollTop: 0
 			}, {
 				complete: function() {
 					button.css('transform', 'rotate(0deg)');
 				}
 			});
		}
	});

	function updateContactHeight() {
		var contact = $('#contact');
		var contactHeight = $(window).height();
		if (!contact.data('minHeight')) {
			contact.data('minHeight', contact.height());
		}
		var minContactHeight = contact.data('minHeight');

		if (contactHeight < minContactHeight){
			contact.height(minContactHeight);
		}

		else {
			contact.height(contactHeight);
		}
	}

	updateContactHeight();

	$(window).on('resize', updateContactHeight);



	// IMPRESSUM
	defaultHeight = $("footer").height();
	windowHeight = $(window).height(); //retrieve current window height
	$("#full-impressum").click(function() {
		$("footer").stop().animate({
			height: windowHeight,
			}, {
				duration: "slow",
				complete: function() {
					$('#impressum .close').fadeIn(50);
				}
			});
	});
	$("#impressum .close").click(function() {
		$('#impressum .close').fadeOut();
		$("footer").stop().animate({
			height: defaultHeight,
			}, "slow");
	});

	//LOAD PORTFOLIO
	container = $("#loaded-content");
	//container.css('height', windowHeight);
	function success (data){
		container.html(data);
		
    // plue
		// fade in
		container.stop().fadeIn();
		$("#wrapper").fadeOut();
		
		setTimeout(function(){
  		$('html, body').animate({
  			scrollTop: 0
  		},200);
    },100);
	}
	
  // plue
	// scroll top in portfolio gallery
	$("#projects a.picture").click(function() {
		$('html, body').animate({
			scrollTop: 0,
		});
	});
	
	$("#portfolio a.picture").click(function() {
		target = $(this).attr("href");

		$.ajax({
			url: target,
			type: 'GET',
    		dataType: 'html',
			success: success,
		});

		return false; 
	}); //click function ende

	//BUTTON OVERVIEW
	$(".button-overview").live("click",function() {
		if( $('#home_index').length ) {

		target = $(this).attr('href');
		target = target.substr(1);
		
    // plue
		// fade in
		container.hide().empty();
		$("#wrapper").show();
		

		return false; 
	}
	}); //click function end   

});


