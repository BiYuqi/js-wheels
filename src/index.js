const IS = require('./utils/is')
const Ary = require('./utils/array')
const Obj = require('./utils/object')
const Browser = require('./utils/browser')
const Ajax = require('./utils/querySearch')
/**
* @param __ 组合对象的接受对象 默认{}
* @param exportAllObj 遍历所有导入的属性方法集合,注入__
*/

/**
* @param allMethods 所有的属性集合
*/
const allMethods = {
	...IS,
	...Ary,
	...Obj,
	...Browser,
	...Ajax
}
/**
* @param {调用方法}
*/
// exportAllObj(allMethods)
if (process.env.NODE_ENV === 'development') {
	// console.log(allMethods)
}

;(function (window, factory) {
    if (typeof exports === 'object') {

        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {

        define(factory);
    } else {

        window.jt = factory();
    }
})(this, function () {
    return allMethods
})
