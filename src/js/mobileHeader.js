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

	toggleMenuItems() {
		let menuItems = $('.header-mobile li');
		let collapsedArrow = 'fa-chevron-right';
		let expandedArrow = 'fa-chevron-down';

		menuItems.click(function(e) {
			e.stopPropagation();

			item = $(this);

			if (item.hasClass('is-opened')) {
				item.removeClass('is-opened');

				item.find('> .fa').removeClass(expandedArrow).addClass(collapsedArrow);
				return;
			}

			item.addClass('is-opened');
			item.find('> .fa').removeClass(collapsedArrow).addClass(expandedArrow);
		});
	},

	init() {
		this.toggleMenu();
		this.toggleMenuItems();
	}
}

MobileHeader.init();