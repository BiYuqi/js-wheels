const arrArg = ['Array', 'String', 'Object', 'Date', 'Number', 'RegExp', 'Null', 'Undefined', 'Function', 'Set', 'Map']
const is = {}
const isFunc = (() => {
  for (let i = 0; i < arrArg.length; i++) {
     is[`is${arrArg[i]}`] = (obj) => {
      return Object.prototype.toString.call(obj) === `[object ${arrArg[i]}]`
    }
  }
})()
is['isNaN'] = (v) => {
  return v !== v
}

export default is
