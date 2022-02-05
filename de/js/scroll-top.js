function showButton() {


    var button  = $('#btn-scroll-top'), //button that scrolls user to top
        view = $(window),
        timeoutKey = -1;

    $(document).on('scroll', function() {
        if(timeoutKey) {
            window.clearTimeout(timeoutKey);
        }
        timeoutKey = window.setTimeout(function(){

            if (view.scrollTop() < 100) {
                button.fadeOut();
            }
            else {
                button.fadeIn();
            }
        }, 100);
    });
}

$('#btn-scroll-top').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500, 'linear');
    return false;
});

//call function on document ready
$(function(){
   showButton();
});