let offcanvas = {
	toggleOffCanvasItem() {
		let controller = $('.off-canvas__control');
		let itemClassPrefix = '.off-canvas__';

		controller.click(function() {
			
			let itemClassName = itemClassPrefix + $(this).data('controls');
			let item = $(itemClassName);

			if (item.hasClass('is-opened')) {
				item.removeClass('is-opened');
				return;
			}

			item.addClass('is-opened');
		});
	},

	init() {
		this.toggleOffCanvasItem();
	}
}

offcanvas.init();