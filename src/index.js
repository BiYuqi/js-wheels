import IS from './core/is'
import * as Ary from './core/array'
import * as Obj from './core/object'
import * as Browser from './core/browser'
import * as Search from './core/query'
import * as Time from './core/times'
import * as Str from './core/string'
import proxy from './core/proxy'

const JSW = Object.assign({},
  Ary,
  Obj,
  Browser,
  Search,
  IS,
  Time,
  Str,
  proxy
)
// if (process.env.NODE_ENV === 'development') {
//   const list = [4, 5, 1, 2, 3]
//   const res = JSW.filter(list, (index, item) => {
//     return item > 4
//   })
//   JSW.spliceByVal(list, 3)
//   console.log(list)
//   console.log(res)
// }
module.exports = JSW
