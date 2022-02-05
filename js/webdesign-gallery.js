$(document).ready(function() { 
	
	//PORTFOLIO CAROUSEL	
	$('#carousel-ul li:first').before($('#carousel-ul li:last'));	
	$('li.next a').click(function(){
		var item_width = $('#carousel-ul li').outerWidth();	
		var left_indent = parseInt($('#carousel-ul').css('left')) - item_width;	

		$('#carousel-ul:not(:animated)').animate({'left' : left_indent}, function(){	
			$('#carousel-ul li:last').after($('#carousel-ul li:first'));	
			//$('#carousel-ul').css({left:'-800px'});
			$('#carousel-ul').css({left: -item_width});
		});	
	});	


	//when user clicks the image for sliding left	
	$('li.prev a').click(function(){ 
		var item_width = $('#carousel-ul li').outerWidth();	
		var left_indent = parseInt($('#carousel-ul').css('left')) + item_width;	

		$('#carousel-ul:not(:animated)').animate({'left' : left_indent},function(){	
			$('#carousel-ul li:first').before($('#carousel-ul li:last'));				
			//$('#carousel-ul').css({left:'-800px'});
			$('#carousel-ul').css({left: -item_width});
		});	
	});

	var Projekt = {
		projekt0: {
			images: [
				"img/Portfolio/Webdesign/fluxcoaching-06@2x.jpg",
				"img/Portfolio/Webdesign/fluxcoaching-00@2x.jpg",
				"img/Portfolio/Webdesign/fluxcoaching-01@2x.jpg",
				"img/Portfolio/Webdesign/fluxcoaching-02@2x.jpg",
				"img/Portfolio/Webdesign/fluxcoaching-04@2x.jpg",
				"img/Portfolio/Webdesign/fluxcoaching-03@2x.jpg",
			],
			headline: 'UX/UI Design & RWD Development',
			text: '2015, JE-Design'
		},
		projekt1: {
			images: [
				"img/Portfolio/Webdesign/berzconsulting-07@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-01@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-02@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-03@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-04@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-05@2x.jpg",
				"img/Portfolio/Webdesign/berzconsulting-06@2x.jpg",
			],
			headline: 'UX/UI Design',
			text: '2015, JE-Design'
		},
		projekt2: {
			images: [
				"img/Portfolio/Webdesign/she-wax-05@2x.jpg",
				"img/Portfolio/Webdesign/she-wax-01@2x.jpg",
				"img/Portfolio/Webdesign/she-wax-02@2x.jpg",
				"img/Portfolio/Webdesign/she-wax-03@2x.jpg",
				"img/Portfolio/Webdesign/she-wax-04@2x.jpg"
			],
			headline: 'UX/UI Design & RWD Development',
			text: '2013, JE-Design'
		},
		projekt3: {
			images: [
				"img/Portfolio/Webdesign/brillenfrieheit-05@2x.jpg",
				"img/Portfolio/Webdesign/brillenfrieheit-00@2x.jpg",
				"img/Portfolio/Webdesign/brillenfrieheit-01@2x.jpg",
				"img/Portfolio/Webdesign/brillenfrieheit-02@2x.jpg",
				"img/Portfolio/Webdesign/brillenfrieheit-03@2x.jpg",
				"img/Portfolio/Webdesign/brillenfrieheit-04@2x.jpg"
			],
			headline: 'UX/UI Design',
			text: '2015, Berz Consulting'
		},
		projekt4: {
			images: [
				"img/Portfolio/Webdesign/yousef-architekten-03@2x.jpg",
				"img/Portfolio/Webdesign/yousef-architekten-01@2x.jpg" ,
				"img/Portfolio/Webdesign/yousef-architekten-02@2x.jpg"
			],
			headline: 'Design',
			text: '2012, Euroweb Internet GmbH'
		},
		projekt5: {
			images: [
				"img/Portfolio/Webdesign/perthes-apotheke-04@2x.jpg",
				"img/Portfolio/Webdesign/perthes-apotheke-01@2x.jpg" ,
				"img/Portfolio/Webdesign/perthes-apotheke-02@2x.jpg",
				"img/Portfolio/Webdesign/perthes-apotheke-03@2x.jpg" 
			],
			headline: 'Design & Development',
			text: '2012, Euroweb Internet GmbH'
		}
	};

	var i = 0;
	var b;
	var img = '';
	var imgSrc = '';

	$('.picture').click(function(e){
		e.preventDefault();
		target = $(this).attr('id');
		document.getElementById('carousel-ul').innerHTML = changeProjekt(target);
	});

	function changeProjekt(name) {
		var z = '';
		name = name || 'projekt0';
		for(i=0; i<Projekt[name]['images'].length; i++){ 
			imgSrc=Projekt[name]['images'][i];
			z += '<li><img src="'+ imgSrc +'"/></li>';
		}
		$(".detail h4").text(Projekt[name]['headline']);
		$(".detail p").text (Projekt[name]['text']);
		return z;
	}

	document.getElementById('carousel-ul').innerHTML=changeProjekt();

	$(".subcontent a.close-project").click(function() {
		$(".detail").stop().animate({
			height: 0,
		}, "slow");
	});

	$(".picture").click(function() {
		$(".detail").stop().animate({
			height: 800,
		}, "slow");
	});

}); 







