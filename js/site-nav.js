///*------------------------------------*\
//    #SITE-NAV
//\*------------------------------------*/

$('.js-site-nav-btn').click(function(e){
	//Prevent achnor link
	e.preventDefault();
	//Turn off other selects
	$('.js-site-nav').toggle();
	console.log("Testing Nav");
});