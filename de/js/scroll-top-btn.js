$(document).ready(function(){
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
     $('.btn-scroll-top').fadeIn();
    } else {
     $('.btn-scroll-top').fadeOut();
    }
    });
   });
   
   function scrolltop()
   {
    $('html, body').animate({scrollTop : 0},500);
   }