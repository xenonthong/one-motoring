window.$ = require('jquery');
window.jQuery = window.$;
window.niceSelect = require('./libraries/jquery-nice-select/jquery.nice-select');

// Require our js files.
require('./offcanvas');
require('./accordion');
require('./backToTop');

$('select').niceSelect();