var app = app = {};
(function($, undefined) {
	"use strict";
	
	app.Events = {
		ready: function() {
			app.defaults.init();
		},
		
		/*load: function() {

		}*/
	},
	
	app.defaults = {
		init: function() {
			$('input[placeholder], textarea[placeholder]').placeholder();
			$('.flexslider').flexslider({
				animation: 'slide',
				controlNav: false
			});
			
			$('.blogslider').flexslider({
				animation: 'slide',
				controlNav: false,
				initDelay: 3000,
			});
		}
	}
	
	/* Initialize.
	--------------------------------------------------------------------------------*/
	$(document).ready(app.Events.ready);
})(jQuery);