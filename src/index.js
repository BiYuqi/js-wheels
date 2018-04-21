import __ from './merge'
;(function(win){
	'use strict';
	if (process.env.NODE_ENV === 'development') {
		// console.log(win)
	}
	if (typeof exports == "object") {
		module.exports = __
	} else {
		win.js_weels = __
	}
})(this || (typeof window !== 'undefined' ? window : global));
