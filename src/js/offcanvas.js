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
			
			$('.off-canvas__content').removeClass('is-opened');
			item.addClass('is-opened');
		});
	},

	init() {
		this.toggleOffCanvasItem();
	}
}

offcanvas.init();