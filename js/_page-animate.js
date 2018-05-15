/*------------------------------------*\
    $PAGE-ANIMATE
\*------------------------------------*/

/**
 * Adds animation behavior to Page
 */

document.addEventListener("DOMContentLoaded", function() {

	var FadeTransition = Barba.BaseTransition.extend({
		start: function() {
			Promise
			.all([this.newContainerLoading, this.fadeOutDown()])
			.then(this.movePages.bind(this));
		},

		fadeOutDown: function() {
			history.scrollRestoration = 'manual';
			var container = this.oldContainer;
			var deferred = Barba.Utils.deferred();
			container.classList.add('animate-fade-out-down');

			return new Promise(function(resolve, reject) {
				container.addEventListener('animationend', function(e) {
					resolve();
				}, false);
			});
		},

		scrollTop: function() {
			console.log("test");
		},

		movePages: function() {
			window.scrollTo( 0, 0 );
			console.log('Just finished scrolling to ' + window.pageYOffset + ' px');
			var _this = this;
			this.updateLinks();
			var newContainer = this.newContainer;
			var oldContainer = this.oldContainer;

			function resolveAnimation() {
				newContainer.addEventListener("animationend",function handler() {
					_this.done();
					newContainer.classList.remove('animate-fade-in');
					newContainer.removeAttribute("style");
					newContainer.removeEventListener("animationend",handler);
				});
			}

			newContainer.classList.add('animate-fade-in');
			resolveAnimation();

		},

		updateLinks: function() {

			var PrevLink = this.newContainer.querySelector('#js-back-btn');

			if (PrevLink) {
				PrevLink.href = "javascript:history.back()";
			}

		}


	});

	Barba.Pjax.getTransition = function() {
		return FadeTransition;
	};

	Barba.Pjax.Dom.wrapperId = "js-page-body";
	Barba.Pjax.Dom.containerClass = "js-page"

	Barba.Pjax.start();
});