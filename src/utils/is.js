import { objTag } from '../base/orgTag.js'

const arrArg = ['Array', 'String', 'Object', 'Date', 'Number', 'RegExp', 'Null', 'Undefined', 'Function', 'Set', 'Map']
const is = {}
const len = arrArg.length
for (let i = 0; i < len; i++) {
   is[`is${arrArg[i]}`] = (obj) => {
    return objTag.call(obj) === `[object ${arrArg[i]}]`
  }
}
is['isNaN'] = (v) => {
  return v !== v
}

module.exports = {
  ...is
}
