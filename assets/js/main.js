$(function() {

	/// ACTIVE fancybox
	$("[data-fancybox]").fancybox({
		transitionIn  :	'elastic',
		transitionOut :	'elastic',
		speedIn		  :	600,
		speedOut	  :	200,
        loop          : true
	});

    // Scroll top button
    $(window).scroll(function(){
        let scroll__top = $('#scroll__top');
        let scrolTop = $(window).scrollTop();
        
        if(scrolTop >= 150) {
            scroll__top.addClass('active');
        } else {
            scroll__top.removeClass('active');
        }
    });
    
    let scroll__top = $('#scroll__top');
    scroll__top.click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
	
});