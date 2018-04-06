# 自制工具脚手架
```js
// 还未发布到npm,初步计划一个小型函数库，后续会发布至npm,喜欢的就点个star吧,欢迎issues

git clone https://github.com/BiYuqi/js-utils.git

cd js-utils

npm install

// development
npm run dev
// production
npm run build
```
## 支持AMD CMD
```js
// webpack es6
import jt from './dist/js-utils.js'
const jt = require('./dist/js-utils.js')
```
## Browser
```html
<!-- 直接引入 -->
<script src="./dist/js-utils.js"></script>
```
```js
  jt.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```
## Array
```js
  jt.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
  jt.difference([1, 2, 3], [2, 3, 4]) // [1, 4] 差集
  jt.differenceWith([1, 2, 3], [2, 3, 4]) // [2, 3] 并集
```
## Object
```js
  /**
  * @param arrayObj 数组包裹的对象
  * @param mark 对象的key
  */
  jt.filterObjectBy([{a:1},{a:1},{a:3},{a:3},{a:4}], 'a')
  // [{a:1},{a:3},{a:4}] 根据对象某一个属性进行去重
```
## Browser
```js
  jt.inBrowser // boolean
  jt.inWeex // boolean
  jt.weexPlatform // boolean
  jt.UA // String
  jt.isIE // boolean
  jt.isIE9 // boolean
  jt.isEdge // boolean
  jt.isAndroid // boolean
  jt.isIOS // boolean
  jt.isChrome // boolean
```
## Is
```js
  jt.isArray([]) // true
  jt.isObject({}) // true
  jt.isString('') // true
  jt.isNumber(123) // true
  jt.isSet(new Set) // true
  jt.isMap(new Map) // true
  jt.isUndefined(undefined) // true
  jt.isDate(new Date()) // true
  jt.isFunction(null) // false
  jt.isRegExp(/\d+/) // true
  jt.isNaN(0/0) // true
```