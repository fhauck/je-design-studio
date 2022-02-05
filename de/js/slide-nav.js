(function( $ ) {
	$.fn.slideshow = function( options ) {
		options = $.extend({
			wrapper: ".single__slide",
			previous: ".prevBtn",
			next: ".nextBtn",
			slides: ".slide-container",
			nav: ".slider-nav",
			pagination: ".carousel__navigation",
			speed: 500,
			easing: "linear"
			
		}, options);
		
		$.fn.slideshow.index = 0;
		
		var slideTo = function( slide, element ) {
			var $currentSlide = $( options.slides, element ).eq( slide );
			
			$currentSlide.
			animate({
				opacity: 1
			}, options.speed, options.easing ).
			siblings( options.slides ).
			css( "opacity", 0 );	
			
		};
		
		return this.each(function() {
			var $element = $( this ),
				$previous = $( options.previous, $element ),
				$next = $( options.next, $element ),
				$pagination = $( options.pagination, $element ),
				$paginationLinks = $( "Navdot", $pagination ),
				total = $( options.slides ).length;
				
				$( options.slides, $element ).each(function() {
					var $slide = $( this );
					var image = $slide.data( "image" );
					$slide.css( "backgroundImage", "url(" + image + ")" );
				});
				
				
				$element.hover(function() {
					$( options.nav, $element ).stop( true, true ).show();	
				}, function() {
					$( options.nav, $element ).stop( true, true ).hide();	
					
				});
				
								
			$next.on( "click", function() {
				$.fn.slideshow.index++;
				$previous.show();
				
				if( $.fn.slideshow.index == total - 1 ) {
					$.fn.slideshow.index = total - 1;
					$next.hide();	
				}
				
				slideTo( $.fn.slideshow.index, $element );
				$paginationLinks.eq( $.fn.slideshow.index ).addClass( "selected" ).
					siblings().removeClass( "selected" );	
				
			});
			
			$previous.on( "click", function() {
				$.fn.slideshow.index--;
				$next.show();
				
				if( $.fn.slideshow.index == 0 ) {
					$.fn.slideshow.index = 0;
					$previous.hide();	
				}
				
				slideTo( $.fn.slideshow.index, $element );
				$paginationLinks.eq( $.fn.slideshow.index ).addClass( "selected" ).
					siblings().removeClass( "selected" );	
				
			});
			
			$paginationLinks.on( "click", function( e ) {
				e.preventDefault();
				var $a = $( this ),
					elemIndex = $a.index();
					$.fn.slideshow.index = elemIndex;
					
					if( $.fn.slideshow.index > 0 ) {
						$previous.show();
						
					} else {
						$previous.hide();
					}
					
					if( $.fn.slideshow.index == total - 1 ) {
						$.fn.slideshow.index = total - 1;
						$next.hide();	
					} else {
						$next.show();
					}
					
					
					
					slideTo( $.fn.slideshow.index, $element );
					$a.addClass( "selected" ).
					siblings().removeClass( "selected" );
				
			});


			
		});
	};
	
	$(function() {
		$( ".start-slide" ).slideshow();
		
	});
	
})( jQuery );
