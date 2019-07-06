import IS from './others/is'
import * as Ary from './array/array'
import * as Obj from './object/object'
import * as Browser from './browser'
import * as Search from './others/query'
import * as Time from './others/times'
import * as Str from './others/string'
import proxy from './others/proxy'

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

export default JSW
