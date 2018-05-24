///*------------------------------------*\
//    #SITE-NAV
//\*------------------------------------*/

Barba.Dispatcher.on('newPageReady', function() {

	$('.js-site-nav-btn').click(function(e){
		//Prevent achnor link
		e.preventDefault();
		//Switch Icons
		$(this).find('.js-site-nav-icon').toggleClass('i-menu').toggleClass('i-cross');
		//Open Menu
		$('.js-site-nav').toggle();
	});

	$('.js-site-nav-link').click(function(e){
		//Switch Icons
		$(this).find('.js-site-nav-icon').addClass('i-menu').removeClass('i-cross');
		//Hide Menu
		$('.js-site-nav').hide();
	});

	$('#js-site-nav-list').mousewheelStopPropagation();
});