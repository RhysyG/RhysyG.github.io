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

	imagesLoaded( document.querySelector('.masonry-grid'), function( instance ) {
		// console.log('all images are loaded');
		msnry.layout();
	});

	
}

Barba.Dispatcher.on('newPageReady', function() {
	var elem = document.querySelector('.masonry-grid');
	if (elem) {
		initiateMasonryGrid();
	}
});