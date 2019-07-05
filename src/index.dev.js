import JSW from './index'

document.querySelector('.jw-utils').innerHTML = "The Js Utils Is Running In Console."

const list = [4, 5, 1, 2, 3]
const res = JSW.filter(list, (index, item) => {
  return item > 4
})
JSW.spliceByVal(list, 3)
console.log(list)
console.log(res)