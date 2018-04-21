import is from './utils/is'
import * as Ary from './utils/array'
import * as Obj from './utils/object'
import * as Browser from './utils/browser'
import * as Ajax from './utils/querySearch'

;(function(global){
	'use strict';
  /**
  * @param __ 组合对象的接受对象 默认{}
  * @param exportAllObj 遍历所有导入的属性方法集合,注入__
  */
  const __ = {}
  const exportAllObj = (params) => {
    const lenRes = params.length
    for (let i = 0; i < lenRes; i++) {
      const source = params[i]
      const sourceName = Object.keys(source)
      const lenName = sourceName.length
      for (let j = 0; j < lenName; j++) {
        const names = sourceName[j]
        __[names] = source[names]
      }
    }
  }

  /**
  * @param allMethods 所有的属性集合
  */
  const allMethods = [
		is,
		Ary,
		Obj,
		Browser,
		Ajax
  ]

  /**
  * @param {调用方法}
  */
  exportAllObj(allMethods)
	if (process.env.NODE_ENV === 'development') {
		console.log(__)
	}

  /**
  * @param {返回}
  */
	if (typeof module !== 'undefined') {
		module.exports = __
	} else {
		global.js_weels = __
	}
})(this)
