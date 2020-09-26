(function () {

	"use strict";

	$(function () {
		// Setup the hamburger menu
		var $sidebar = $( ".sidebar" ),
			$menu = $sidebar.find( ".menu" ),
			$body = $( "body" ),
			$window = $( window ),
			touchDevice = $( "html" ).hasClass( "touchevents" ),
			touches = [];

		var showSidebar = function ( e ) {
			e.preventDefault();
			e.stopPropagation();
			$sidebar
				.stop( false, false )
				.animate({ "left": 0 }, 500);
			if ( !touchDevice ) {
				$body.one( "click", hideSidebar );
			} else {
				$body[ 0 ].addEventListener( 'touchstart', touchStart );
				$body[ 0 ].addEventListener( 'touchmove', touchMove );
			}
			return false;
		};

		var hideSidebar = function ( e ) {
			if ( touchDevice ) {
				$body[ 0 ].removeEventListener( 'touchstart', touchStart );
				$body[ 0 ].removeEventListener( 'touchmove', touchMove );
			}
			$sidebar
				.stop( false, false )
				.animate({ "left": "-101%" }, 500);
		};

		var touchStart = function () {
			touches = [];
		};

		var touchMove = function ( e ) {
			touches.push( e );
			if ( touches.length > 1 ) {
				var diffX = touches[ touches.length - 1 ].touches[ 0 ].clientX - touches[ 0 ].touches[ 0 ].clientX;
				var diffY = touches[ touches.length - 1 ].touches[ 0 ].clientY - touches[ 0 ].touches[ 0 ].clientY;
				if ( diffX < -30 && Math.abs(diffX) > Math.abs(diffY) ) {
					hideSidebar( e );
				}
			}
		};

		$( ".toolbar .hamburger" ).on( "click", showSidebar );

		// WSXTHR-1043: Do this only on the desktop screen
		if ( !touchDevice ) {
			$window.on( "resize", hideSidebar );
		}
	});

})();
