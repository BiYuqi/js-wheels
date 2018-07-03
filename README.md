# 自制工具脚手架
```js
```
## 安装
```js
npm i js-wheels -S
```
## 使用
```js
// webpack es6
import JSW from 'js-wheels'
const JSW = require('js-wheels')
```
## Browser
```html
<!-- 直接引入 -->
<script src="./dist/js-wheels.js"></script>
```
```js
  JSW.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```
## Array
```js
  JSW.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
  JSW.difference([1, 2, 3], [2, 3, 4]) // [1, 4] 差集
  JSW.differenceWith([1, 2, 3], [2, 3, 4]) // [2, 3] 并集
  JSW.flattenArray([1, [2, 3]]) // [1, 2, 3] 扁平化数组
```
## Object
```js
  /**
  * @param arrayObj 数组包裹的对象
  * @param mark 对象的key
  */
  JSW.filterObjectBy([{a:1},{a:1},{a:3},{a:3},{a:4}], 'a')
  // [{a:1},{a:3},{a:4}] 根据对象某一个属性进行去重
```
## Browser
```js
  JSW.inBrowser // boolean
  JSW.inWeex // boolean
  JSW.weexPlatform // boolean
  JSW.UA // String
  JSW.isIE // boolean
  JSW.isIE9 // boolean
  JSW.isEdge // boolean
  JSW.isAndroid // boolean
  JSW.isIOS // boolean
  JSW.isChrome // boolean
```
## Is
```js
  JSW.isArray([]) // true
  JSW.isObject({}) // true
  JSW.isString('') // true
  JSW.isNumber(123) // true
  JSW.isSet(new Set) // true
  JSW.isMap(new Map) // true
  JSW.isUndefined(undefined) // true
  JSW.isDate(new Date()) // true
  JSW.isFunction(null) // false
  JSW.isRegExp(/\d+/) // true
  JSW.isNaN(0/0) // true
```
## Other

```js
/**
* 格式化请求参数
* @param {{ query }} Object
* {
*   key: '123',
*   name: 'byq',
*   test: ''
* }
* key=123&name=byq
*/
JSW.formatQuery(query)
```
