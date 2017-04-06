let offcanvas = {
	toggleOffCanvasItem() {
		let controller = $('.off-canvas__control');
		let itemClassPrefix = '.off-canvas__';

		controller.click(function() {
			
			let itemClassName = itemClassPrefix + $(this).data('controls');
			let item = $(itemClassName);
			let body = $('body');

			if (item.hasClass('is-opened')) {
				item.removeClass('is-opened');
				offcanvas.removeEffect(body);

				return;
			}

			$('.off-canvas__content').removeClass('is-opened');
			item.addClass('is-opened');
			offcanvas.addEffect(body);
		});
	},

	addEffect(body) {
		body.addClass('off-canvas-lock');
	},

	removeEffect(body) {
		body.removeClass('off-canvas-lock');
	},

	init() {
		this.toggleOffCanvasItem();
	}
}

offcanvas.init();