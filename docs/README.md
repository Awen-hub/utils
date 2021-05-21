## Objects

<dl>
<dt><a href="#Array">Array</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Number">Number</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#String">String</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Date">Date</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Object">Object</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Array"></a>

## Array : <code>object</code>
**Kind**: global namespace  

* [Array](#Array) : <code>object</code>
    * [.randomItems](#Array.randomItems) ⇒ <code>null</code> \| [<code>Array</code>](#Array)
    * [.shallowCloneList](#Array.shallowCloneList) ⇒ [<code>Array</code>](#Array)
    * [.foreachList](#Array.foreachList) ⇒ <code>void</code> \| <code>boolean</code>
    * [.removeItemByIndex](#Array.removeItemByIndex) ⇒ <code>null</code> \| [<code>Array</code>](#Array)
    * [.range](#Array.range) ⇒ <code>null</code> \| [<code>Array</code>](#Array)
    * [.exchangeItemByIndex](#Array.exchangeItemByIndex) ⇒ <code>null</code> \| [<code>Array</code>](#Array)

<a name="Array.randomItems"></a>

### Array.randomItems ⇒ <code>null</code> \| [<code>Array</code>](#Array)
从传入数组中获取若干随机项作为返回值, 选取的项可能重复

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: <code>null</code> \| [<code>Array</code>](#Array) - -返回数组的任意一项或者把若干项合并为数组返回, 个别异常返回null  

| Param | Type | Description |
| --- | --- | --- |
| originList | [<code>Array</code>](#Array) | 随机项的来源数组 |
| [targetCounts] | <code>number</code> | 需要返回多少项，默认为1 |

<a name="Array.shallowCloneList"></a>

### Array.shallowCloneList ⇒ [<code>Array</code>](#Array)
数组浅拷贝

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: [<code>Array</code>](#Array) - 原数组的浅拷贝  

| Param | Type |
| --- | --- |
| originList | [<code>Array</code>](#Array) | 

<a name="Array.foreachList"></a>

### Array.foreachList ⇒ <code>void</code> \| <code>boolean</code>
数组迭代器

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: <code>void</code> \| <code>boolean</code> - -该函数正常情况不返回任何值，若循环被中断返回true  

| Param | Type | Description |
| --- | --- | --- |
| list | [<code>Array</code>](#Array) | 源数组 |
| iteratorFn | <code>function</code> | 迭代函数，可传入三个参数,{item: any, index?: number, array?: any[]}，函数返回true可以中断循环 |

<a name="Array.removeItemByIndex"></a>

### Array.removeItemByIndex ⇒ <code>null</code> \| [<code>Array</code>](#Array)
删除指定index的项，返回新的数组

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: <code>null</code> \| [<code>Array</code>](#Array) - -返回删除指定项后的新数组, 对于原数组中不存在的下标不作处理, 重复下标只删除一次  

| Param | Type | Description |
| --- | --- | --- |
| originList | [<code>Array</code>](#Array) | 源数组 |
| indexList | [<code>Array</code>](#Array) | 包含需要删除项index值组成的数组 |

<a name="Array.range"></a>

### Array.range ⇒ <code>null</code> \| [<code>Array</code>](#Array)
生成一个包含闭区间内所有整数的数组

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: <code>null</code> \| [<code>Array</code>](#Array) - -返回生成的的新数组, 异常返回null  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>number</code> | 区间最小值 |
| to | <code>number</code> | 区间最大值 |

<a name="Array.exchangeItemByIndex"></a>

### Array.exchangeItemByIndex ⇒ <code>null</code> \| [<code>Array</code>](#Array)
交换数组中的两项，返回新的数组

**Kind**: static property of [<code>Array</code>](#Array)  
**Returns**: <code>null</code> \| [<code>Array</code>](#Array) - -返回交换后的新数组, 异常返回null  

| Param | Type | Description |
| --- | --- | --- |
| originList | [<code>Array</code>](#Array) | 源数组 |
| fromIndex | <code>number</code> | 需要交换的项的下标 |
| toIndex | <code>number</code> | 交换后的项的下标 |

<a name="Number"></a>

## Number : <code>object</code>
**Kind**: global namespace  

* [Number](#Number) : <code>object</code>
    * [.random](#Number.random) ⇒ <code>number</code>
    * [.trunc](#Number.trunc) ⇒ <code>number</code>
    * [.isFloat](#Number.isFloat) ⇒ <code>boolean</code>
    * [.abs](#Number.abs) ⇒ <code>number</code>
    * [.isFloatEqual](#Number.isFloatEqual) ⇒ <code>boolean</code>
    * [.isPrime](#Number.isPrime) ⇒ <code>boolean</code>
    * [.isLess](#Number.isLess) ⇒ <code>boolean</code>
    * [.isLessOrEqual](#Number.isLessOrEqual) ⇒ <code>boolean</code>
    * [.isGreater](#Number.isGreater) ⇒ <code>boolean</code>
    * [.isGreaterOrEqual](#Number.isGreaterOrEqual) ⇒ <code>boolean</code>
    * [.inRange](#Number.inRange) ⇒ <code>number</code>

<a name="Number.random"></a>

### Number.random ⇒ <code>number</code>
返回一个范围内的随机数

**Kind**: static property of [<code>Number</code>](#Number)  
**Returns**: <code>number</code> - -返回上界与下届之间的一个数  

| Param | Type | Description |
| --- | --- | --- |
| low | <code>number</code> | 下界 |
| high | <code>number</code> | 上界,不可达 |

<a name="Number.trunc"></a>

### Number.trunc ⇒ <code>number</code>
取数值整数部分

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="Number.isFloat"></a>

### Number.isFloat ⇒ <code>boolean</code>
判断一个数是否为浮点数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 传入的数 |

<a name="Number.abs"></a>

### Number.abs ⇒ <code>number</code>
返回一个数的绝对值

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 传入参数 |

<a name="Number.isFloatEqual"></a>

### Number.isFloatEqual ⇒ <code>boolean</code>
判断两个浮点数是否相等

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| num1 | <code>number</code> | 第一个浮点数 |
| num2 | <code>number</code> | 第二个浮点数 |

<a name="Number.isPrime"></a>

### Number.isPrime ⇒ <code>boolean</code>
判断一个数是否是素数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 传入的参数 |

<a name="Number.isLess"></a>

### Number.isLess ⇒ <code>boolean</code>
判断第一个参数是否小于于第二个参数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| leftNumber | <code>number</code> | 第一个参数 |
| rightNumber | <code>number</code> | 第二个参数 |

<a name="Number.isLessOrEqual"></a>

### Number.isLessOrEqual ⇒ <code>boolean</code>
判断第一个参数是否小于等于第二个参数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| leftNumber | <code>number</code> | 第一个参数 |
| rightNumber | <code>number</code> | 第二个参数 |

<a name="Number.isGreater"></a>

### Number.isGreater ⇒ <code>boolean</code>
判断第一个参数是否大于第二个参数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| leftNumber | <code>number</code> | 第一个参数 |
| rightNumber | <code>number</code> | 第二个参数 |

<a name="Number.isGreaterOrEqual"></a>

### Number.isGreaterOrEqual ⇒ <code>boolean</code>
判断第一个参数是否大于等于第二个参数

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| leftNumber | <code>number</code> | 第一个参数 |
| rightNumber | <code>number</code> | 第二个参数 |

<a name="Number.inRange"></a>

### Number.inRange ⇒ <code>number</code>
判断某个数是否在一个闭区间内

**Kind**: static property of [<code>Number</code>](#Number)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 需要判断的数 |
| low | <code>number</code> | 闭区间左值 |
| high | <code>number</code> | 闭区间右值 |

<a name="String"></a>

## String : <code>object</code>
**Kind**: global namespace  

* [String](#String) : <code>object</code>
    * [.reverseString](#String.reverseString) ⇒ <code>string</code>
    * [.isPalindrome](#String.isPalindrome) ⇒ <code>boolean</code>
    * [.matchThroughout](#String.matchThroughout) ⇒ <code>string</code>

<a name="String.reverseString"></a>

### String.reverseString ⇒ <code>string</code>
反转一个字符串，不修改原字符串

**Kind**: static property of [<code>String</code>](#String)  
**Returns**: <code>string</code> - 反转后的字符串  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="String.isPalindrome"></a>

### String.isPalindrome ⇒ <code>boolean</code>
判断一个字符串是否是回文串

**Kind**: static property of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="String.matchThroughout"></a>

### String.matchThroughout ⇒ <code>string</code>
通过传入开头和结尾来匹配一个字符串

**Kind**: static property of [<code>String</code>](#String)  
**Returns**: <code>string</code> - 反转后的字符串  

| Param | Type | Description |
| --- | --- | --- |
| originString | <code>string</code> | 源字符串 |
| start | <code>string</code> \| <code>RegExp</code> | 字符串的开头, 如果传入正则表达式不能开启全局匹配 |
| end | <code>string</code> \| <code>RegExp</code> | 字符串的结尾, 如果传入正则表达式不能开启全局匹配 |

<a name="Date"></a>

## Date : <code>object</code>
**Kind**: global namespace  
<a name="Date.getTimezone"></a>

### Date.getTimezone ⇒ [<code>Object</code>](#Object)
返回当前时区

**Kind**: static property of [<code>Date</code>](#Date)  
**Returns**: [<code>Object</code>](#Object) - 返回一个对象，包含当前时区的相关信息  
**Example**  
```js
{hours: 8, minutes: 15} //hours为正代表东时区，负为西时区
```
<a name="Object"></a>

## Object : <code>object</code>
**Kind**: global namespace  
<a name="Object.EventBus"></a>

### Object.EventBus ⇒ <code>EventBus</code>
EventBus对象, 拥有on，off，emit方法

**Kind**: static property of [<code>Object</code>](#Object)  
**Example**  
```js
var eventBus = new EventBus()eventBus.on('log', (num1, num2) => {console.log(num1 + num2)})eventBus.emit('log')eventBus.off('log', num)
```
