$(document).ready(function() {
	var gallery = $('#carousel-ul');
	var galleryWidth = 960;
	var galleryImages = gallery.length;
	var getIndent = function(index) {
		return Math.floor((galleryWidth - gallery.find('li').eq(index).width()) / 2);
	};

	//PORTFOLIO CAROUSEL
	gallery.find('li:first').before(gallery.find('li:last'));
	$('li.next a').click(function() {
		var leftIndent = -gallery.find('li').eq(2).position().left + getIndent(2);
		$('#carousel-ul:not(:animated)').animate({left: leftIndent}, function() {
			gallery.find('li:last').after(gallery.find('li:first'));
			gallery.css({left: -gallery.find('li').eq(1).position().left + getIndent(1)});
		});	
	});	

	//when user clicks the image for sliding left
	$('li.prev a').click(function() {
		var leftIndent = -gallery.find('li').eq(0).position().left + getIndent(0);
		$('#carousel-ul:not(:animated)').animate({left: leftIndent}, function() {
			gallery.find('li:first').before(gallery.find('li:last'));
			gallery.css({left: -gallery.find('li').eq(1).position().left + getIndent(1)});	
		});	
	});

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
