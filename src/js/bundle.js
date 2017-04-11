window.$ = require('jquery');
window.jQuery = window.$;
window.debounce = require('debounce');
window.niceSelect = require('./libraries/jquery-nice-select/jquery.nice-select');

// Require our js files.
require('./offcanvas');
require('./accordion');
// require('./backToTop');
require('./stickyMenu');

$('select').niceSelect();