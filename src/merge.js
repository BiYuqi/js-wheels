import is from './utils/is'
import * as Ary from './utils/array'
import * as Obj from './utils/object'
import * as Browser from './utils/browser'
import * as Ajax from './utils/querySearch'

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
exportAllObj(allMethods)
export default __
