let stickyMenu = {
	appearAfter(offset) {
		let menu = $('header:visible');

		$(window).scroll(function() {
			if ($(this).scrollTop() >= offset) {
				menu.addClass('is-sticky animated slideInDown');
			} else {
				menu.removeClass('is-sticky animated slideInDown');
			}
		});
	},

	init() {
		stickyMenu.appearAfter(300);
	}
}

stickyMenu.init();