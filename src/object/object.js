import Is from '../others/is'
/**
* filterObjectBy
* 过滤同一个对象， 根据某一个属性进行过滤
* eg.
* filterObjectBy([{a:1},{a:1},{a:3},{a:3},{a:4}], 'a')
* [{a:1},{a:3},{a:4}]
*/
export function filterObjectBy (arrayObj, mark) {
  let result = []
  let flag = false
  const LEN = arrayObj.length
  for (let i = 0; i < LEN; i++) {
    flag = false
    const LEN_RES = result.length
    for (let j = 0; j < LEN_RES; j++) {
      if (arrayObj[i][mark] === result[j][mark]) {
        flag = true
        break
      }
    }
    if (!flag) {
      result.push(arrayObj[i])
    }
  }
  return result
}

/**
* deep copy code
*/
export function cloneDeep (o) {
  const isObj = Is.isObject(o)
  const oc = isObj ? {} : []
  for (let i in o) {
    if (o.hasOwnProperty(i)) {
      // object or array but not constant

      if (typeof o[i] === 'object') {
        oc[i] = cloneDeep(o[i])
      } else {
        oc[i] = o[i]
      }
    }
  }
  return oc
}

/**
* https://github.com/tc39/proposal-optional-chaining
* https://www.mmxiaowu.com/article/5b18d19f2f52003e4d38c639
* @param {target} source data
* @param {props}
* @param {def}
* use:
* const data = {
*  name: {
*    age: {
*      go: 27
*    }
*  },
*  age: 38
* }
* chaining(data, 'name.age.go', '加载中...') // 27
* chaining(data, 'name.g.g.b.c', '加载中...') // 加载中...
* chaining(data, 'age', '暂无数据') // 38
*/
export function chaining (target, props, def = '') {
  if (!props || !Is.isString(props)) {
    return target
  }
  const spl = props.split('.')
  const returnVal = spl.reduce((prev, curr) => {
    return prev && prev[curr]
  }, target)
  return returnVal || def
}
/**
 * @param {Array} arr
 * @param {String} key
 * 数组对象转map map 结构
 * @example
 * [{
 *   id: 1,
 *   name: 'biyuqi',
 *   age: 26
 * },
 * {
 *  id: 2,
 *  name: 'bailemen',
 *  age: 101
 * }
 * @return
 * {
 * 1: {
 *   name: 'biyuqi',
 *   age: 26
 * },
 * 2:{
 *    name: 'bailemen',
 *    age: 101
 *   }
 * }
 */
export function arrToHash (arr, key) {
  if (!Array.isArray(arr)) {
    throw 'arr must be an array'
  }
  if (arr.length === 0) {
    throw 'The length of arr is not allow zero'
  }
  if (typeof key !== 'string') {
    throw 'key is must be string'
  }
  const map = {}
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const keys = arr[i][key]
    delete arr[i][key]
    map[keys] = arr[i]
  }
  return map
}
