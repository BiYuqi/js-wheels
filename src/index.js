import IS from './utils/is'
import * as Ary from './utils/array'
import * as Obj from './utils/object'
import * as Browser from './utils/browser'
import * as Search from './utils/querySearch'

/**
* @param allMethods 所有的属性集合
*/
const allMethods = Object.assign({}, Ary, Obj, Browser, Search, IS)

if (process.env.NODE_ENV === 'development') {
	// console.log(allMethods)
}

module.exports = allMethods
