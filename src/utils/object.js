/**
* filterObjectBy
* 过滤同一个对象， 根据某一个属性进行过滤
* eg.
* filterObjectBy([{a:1},{a:1},{a:3},{a:3},{a:4}], 'a')
* [{a:1},{a:3},{a:4}]
*/
export const filterObjectBy = (arrayObj, mark) => {
  let result = []
  let flag = false
  const LEN = arrayObj.length
  for (let i = 0; i < LEN; i++) {
    flag = false
    const LEN_RES = result.length
    for (let j = 0; j < LEN_RES; j++) {
      if (arrayObj[i][mark] === result[j][mark]) {
        flag = true
        break
      }
    }
    if (!flag) {
      result.push(arrayObj[i])
    }
  }
  return result
}
