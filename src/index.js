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

export default JSW
