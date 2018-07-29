## 自制工具脚手架
> 欢迎提问题，欢迎start, 欢迎补充pr

### TODO
- [x] 整体架构第一阶段趋于稳定
- [ ] 单元测试
- [ ] 待完善文档
- [ ] 待完善英文文档
- [ ] 命名要合理，后续迭代每月一次
- [ ] 项目后续结构调整类似于lodash

## 开始(Getting Started)
### 安装(Install)
建议默认安装最新的，不要加版本号，新功能会不断的加入
```js
npm i js-wheels -S
```
### 模块引入
```js
// webpack es6
import JSW from 'js-wheels'
const JSW = require('js-wheels')
```
### 直接引入
```html
<!-- 直接引入的全局变量为 JsWheels -->
<script src="./dist/js-wheels.js"></script>
JsWheels.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```

## 用法(Usage Example)
#### Array
```js
JSW.chunck([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
JSW.difference([1, 2, 3], [2, 3, 4]) // [1, 4] 差集
JSW.differenceWith([1, 2, 3], [2, 3, 4]) // [2, 3] 并集
JSW.flattenArray([1, [2, 3]]) // [1, 2, 3] 扁平化数组
JSW.myFilter([1, 2, 3], (index, item) => item > 2) // [3]
JSW.spliceByVal(arr, target) // 删除指定元素
JSW.binarySearch(arr, item) // 二分查找
```
#### Object
###### filterObjectBy
```js
/**
* @param arrayObj 数组包裹的对象
* @param mark 对象的key
*/
JSW.filterObjectBy([{a:1},{a:1},{a:3},{a:3},{a:4}], 'a')
// [{a:1},{a:3},{a:4}] 根据对象某一个属性进行去重
```
###### cloneDeep
```js
/**
* @param {Array Object} obj 数组或者对象
*/
JSW.cloneDeep(obj)
```
##### chaining
解决ajax数据异步返回，导致渲染模板报错undefined
```html
用Vue举个例子
<div>{{{ chaining(data, 'name.age.go', '加载中...') }}}</div>
```
```js
/**
* https://github.com/tc39/proposal-optional-chaining
* https://www.mmxiaowu.com/article/5b18d19f2f52003e4d38c639
* @param {target} source data
* @param {props}
* @param {def}
* use:
* const data = {
*  name: {
*    age: {
*      go: 27
*    }
*  },
*  age: 38
* }
*/
JSW.chaining(data, 'name.age.go', '加载中...') // 27
JSW.chaining(data, 'name.g.g.b.c', '加载中...') // 加载中...
JSW.chaining(data, 'age', '暂无数据') // 38
```
##### arrToHash
数组对象 => 转为双map结构
```js
/**
 * @param {Array} arr
 * @param {String} key
 * 数组对象转map map 结构
 * @example
 * [{
 *   id: 1,
 *   name: 'biyuqi',
 *   age: 26
 * },
 * {
 *  id: 2,
 *  name: 'bailemen',
 *  age: 101
 * }
 * @return
 * {
 * 1: {
 *   name: 'biyuqi',
 *   age: 26
 * },
 * 2:{
 *    name: 'bailemen',
 *    age: 101
 *   }
 * }
 */
 JSW.arrToHash(before, 'id')
```
#### Browser
```js
JSW.inBrowser // boolean
JSW.inWeex // boolean
JSW.weexPlatform // boolean
JSW.UA // String
JSW.isIE // boolean
JSW.isIE9 // boolean
JSW.isIE10 // boolean
JSW.isIE11 // boolean
JSW.isEdge // boolean
JSW.isAndroid // boolean
JSW.isIOS // boolean
JSW.isChrome // boolean
```
#### Is
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
#### Time
```js
JSW.timeAgo('2018-07-7 02:09:23') // 5 days ago
JSW.timeAgo('2018-07-7 02:09:23', 'cn') // 5天前
```
#### String
```js
JSW.trimLeft(' 123') // 123
JSW.trimRight('456  ') // 456
JSW.trimAll(' 7 8 9 ') // 789
JSW.repeatStr('js', 2) // jsjs
```
#### Other

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
