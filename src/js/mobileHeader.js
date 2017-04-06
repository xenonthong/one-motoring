let MobileHeader = {
	toggleMenu() {
		let ham = $('.hamburger');
		let menu = $('.header-mobile .mega-menu');

		ham.click(() => {
			
			let opened = menu.hasClass('is-opened');

			if (opened) {
				menu.removeClass('is-opened');
				return;
			}

			menu.addClass('is-opened');
		});
	},

	init() {
		this.toggleMenu();
	}
}

MobileHeader.init();