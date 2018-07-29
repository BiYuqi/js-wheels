/**
* @authour BiYuqi
* @params timer
* @use support '2018-1-3 12:09:34' and '1530899085321'
*/
export function timeAgo (timer, type = 'cn') {
  const isChinese = type === 'cn'
  const compare = Date.now() / 1000 - new Date(timer).getTime() / 1000
  function filter (type, cn, en) {
    return isChinese ? cn : en
  }
  if (!timer || !/\d/.test(timer)) {
    throw Error(isChinese ? '必须传一个时间格式的字符' : 'timer is not allow empty')
  }
  if (compare < 0) {
    throw Error(isChinese ? '该方法不支持未来的时间' : 'The funciton is not support negative number')
  }
  if (compare < 3600) {
    return ~~(compare / 60) + filter('分钟前', ' minutes ago')
  } else if (compare < 3600 * 24 ) {
    return ~~(compare / 3600) + filter('小时前', ' hours ago')
  } else if (compare < 3600 * 24 * 7) {
    return ~~(compare /(3600 * 24)) + filter('天前', ' days ago')
  } else if (compare < 3600 * 24 * 7 * 4) {
    return ~~(compare / (3600 * 24 * 7)) + filter('周前', ' weeks ago')
  } else {
    return ~~(compare / (3600 * 24 * 7 * 4)) + filter('月前', ' mounths ago')
  }
}
