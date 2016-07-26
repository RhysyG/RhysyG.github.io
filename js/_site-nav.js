///*------------------------------------*\
//    #SITE-NAV
//\*------------------------------------*/

$('.js-site-nav-btn').click(function(e){
	//Prevent achnor link
	e.preventDefault();
	//Switch Icons
	$(this).find('.js-site-nav-icon').toggleClass('i-menu').toggleClass('i-cross');
	//Open Menu
	$('.js-site-nav').toggle();
});