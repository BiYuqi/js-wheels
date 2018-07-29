import Is from './is'

const trimL = /^\s*/g
const trimR = /\s*$/g
const trimA = /\s/g
/**
* trimLeft
*/
export function trimLeft (str) {
  if (!Is.isString(str)) {
    throw new Error('The argument to the trimLeft method must be a String')
  }
  return str.replace(trimL, '')
}

/**
* trimRight
*/
export function trimRight (str) {
  if (!Is.isString(str)) {
    throw new Error('The argument to the trimRight method must be a String')
  }
  return str.replace(trimR, '')
}

/**
* trimAll
*/
export function trimAll (str) {
  if (!Is.isString(str)) {
    throw new Error('The argument to the trimAll method must be a String')
  }
  return str.replace(trimA, '')
}

/**
* repeatStr
*/
export function repeatStr (str, count = 2) {
  if (!Is.isNumber(count)) {
    throw new Error('The argument to the repeatStr method must be a Number')
  }
  if (count <= 0) {
    return str
  }
  let s = ''
  let i = 0
  while (i < count) {
    s += str
    i++
  }
  return s
}
