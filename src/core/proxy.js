/**
 * @param {Object} obj
 * @param {} path
 * @example 拦截由于数据为空导致报错undefined 与chaining方法功能一样
 * const test = {
 *  a: 123,
 *  b: 456,
 *  list: {
 *    dog: '旺旺'
 *  }
 * }
 * proxy(test).a() // 123
 * proxy(test).a.list() // {dog: '旺旺'}
 * proxy(test).a.list.cat('默认值') // 默认值
 */
export default {
  proxy: (obj, path = []) => {
    return new Proxy(() => {}, {
      get: (target, key) => {
        return proxy(obj, path.concat(key))
      },
      apply: (target, thisArg, args) => {
        let result = obj
        for (let i = 0; i < path.length; i++) {
          result = result[path[i]]
          if (!result) {
            result = args[0]
            break
          }
        }
        return result
      }
    })
  }
}