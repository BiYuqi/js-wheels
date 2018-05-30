const IS = require('./is.js')
/**
* chunck
* splice array by conditions
*/
export const chunck = (arr, size) => {
  if (!IS.isArray(arr)) {
    throw 'The source must be an Array'
    return
  }
  if (!IS.isNumber(size)) {
    throw 'size must be an Number'
    return
  }
  const len = arr.length ? arr.length : 0
  const result = []
  if (!len || size < 1) {return []}
  const splitGroup = Math.ceil(len / size)
  for (let i = 0; i < splitGroup; i++) {
    const start = i * size
    const end = start + size
    result.push(arr.slice(start, end))
  }
  return result
}
/**
* difference 差集
*/
export const difference = (a, b) => {
    const s = new Set(b)
    const q = new Set(a)
    return [].concat(a.filter((item) => !s.has(item))).concat(b.filter((item) => !q.has(item)))
}
/**
* difference 交集
*/
export const differenceWith = (a, b) => {
    const s = new Set(b)
    return [].concat(a.filter((item) => s.has(item)))
}
/**
* array flatten 数据扁平化
*/
export const flattenArray = (source) => {
  if (!IS.isArray(source)) {
    throw new Error('source must be an array')
  }
  const res = []
  ;(function flat(source) {
    const len = source.length
    for (let i = 0; i < len; i++) {
      IS.isArray(source[i]) ? flat(source[i]) : res.push(source[i])
    }
  })(source)
  return res
}
