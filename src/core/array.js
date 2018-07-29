import IS from './is'
/**
* chunck
* splice array by conditions
*/
export function chunck (arr, size) {
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
export function differenceWith (a, b) {
    const s = new Set(b)
    return [].concat(a.filter((item) => s.has(item)))
}
/**
* array flatten 数据扁平化
*/
export function flattenArray (source) {
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

/**
* 过滤器
*/
export function filter (arr, fn) {
  if (!IS.isArray(arr)) {
    throw new Error('The first argument to myFilter method must be an array')
  }
  const len = arr.length
  const res = []
  for (let i = 0; i < len; i++) {
    if (fn(i, arr[i], arr)) {
      res.push(arr[i])
    }
  }
  return res
}
/**
 * 删除指定数组元素
 * @param arr
 */
export function spliceByVal (arr, val) {
  if (!IS.isArray(arr)) {
    throw new Error('The first argument to spliceByVal method must be an array')
  }
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1)
      break
    }
  }
  return arr
}
/**
 * 二分查找 针对有序数组
 * @param {arr} array
 * @param {target} 
 */
export function binarySearch (arr, target) {
  if (!IS.isArray(arr)) {
    throw new Error('The first argument to binarySearch method must be an order array')
  }
  let hight = arr.length - 1
  let low = 0
  while (low <= hight) {
    const mid = Math.floor((hight + low) / 2)
    const guess = arr[mid]
    if (guess < target) {
      low = mid + 1
    } else if (guess > target) {
      hight = mid - 1
    } else {
      return mid
    }
  }
  return 'none'
}
