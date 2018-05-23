const IS = require('./is.js')
/**
* 格式化请求参数
* @param {{ query }} Object
* {
*   key: '123',
*   name: 'byq',
*   test: ''
* }
* key=123&name=byq
*/
const formatQuery = (query) => {
  if (!IS.isObject(query)) {
    throw new Error('query must be an Object')
  }
  let res = []
  for (let i in query) {
    if (query.hasOwnProperty(i)) {
      if (query[i]) {
        res.push(i)
        res.push('=')
        res.push(query[i])
        res.push('&')
      }
    }
  }
  return res.join('').replace(/&$/, '')
}

module.exports = {
  formatQuery
}
