import IS from './utils/is'
import * as Ary from './utils/array'
import * as Obj from './utils/object'
import * as Browser from './utils/browser'
import * as Search from './utils/querySearch'
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
	...Search
}
/**
* @param {调用方法}
*/
// exportAllObj(allMethods)
if (process.env.NODE_ENV === 'development') {
	// console.log(allMethods)
}

module.exports = allMethods
