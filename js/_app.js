/*------------------------------------*\
    $APP
\*------------------------------------*/

/**
 * Initiates the masonry grid
 */

function initiateMasonryGrid() {

	var elem = document.querySelector('.masonry-grid');
	var msnry = new Masonry( elem, {
		// options
		itemSelector: '.masonry-grid-item',
		columnWidth: '.masonry-grid-sizer',
		percentPosition: true,
		gutter: '.masonry-gutter-sizer',
		transitionDuration: 0,
		horizontalOrder: true
	});

	// TODO: Not sure why I need a timeout but timing are off for some reason

	window.setTimeout(function(){
		msnry.layout();
	},100);
}

Barba.Dispatcher.on('newPageReady', function() {
	console.log("newPageReady");
	var elem = document.querySelector('.masonry-grid');
	if (elem) {
		initiateMasonryGrid();
	}
});