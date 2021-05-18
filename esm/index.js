/**
 * @namespace Array
 */
const arrayModuleName = "Array";

/**
 * @memberof Number
 * @description 返回一个范围内的随机数
 * @name random
 * @param {number} low -下界
 * @param {number} high -上界,不可达
 * @returns {number} -返回上界与下届之间的一个数
 */
const random = (low, high) => {
    const distance = high - low;
    return low + distance * Math.random();
};

/**
 * @memberof Number
 * @description 取数值整数部分
 * @name trunc
 * @param  {number} num
 * @returns {number}
 */
const trunc = (num) => ~~num;

/**
 * @memberof Array
 * @name randomItems
 * @description 从传入数组中获取若干随机项作为返回值, 选取的项可能重复
 * @param {Array} originList -随机项的来源数组
 * @param {number} [targetCounts] -需要返回多少项，默认为1
 * @returns {null|Array} -返回数组的任意一项或者把若干项合并为数组返回, 个别异常返回null
 */
const randomItems = (originList, targetCounts = 1) => {
    if (originList.length === 0 ||
        targetCounts > originList.length ||
        targetCounts < 0) {
        // 当原数组为空或者目标数量大于原数组长度，返回null
        return null;
    }
    const resultList = [];
    for (let i = 0; i < targetCounts; i++) {
        const index = trunc(random(0, originList.length));
        resultList.push(originList[index]);
    }
    return resultList;
};

/**
 * @memberof Array
 * @description 数组浅拷贝
 * @name shallowCloneList
 * @param {Array} originList
 * @returns {Array} 原数组的浅拷贝
 */
const shallowCloneList = (originList) => originList.slice();

/**
 * @memberof Array
 * @name foreachList
 * @description 数组迭代器
 * @param {Array} list -源数组
 * @param {Function} iteratorFn -迭代函数，可传入三个参数,{item: any, index?: number, array?: any[]}，函数返回true可以中断循环
 * @returns {void | boolean} -该函数正常情况不返回任何值，若循环被中断返回true
 */
const foreachList = (list, iteratorFn) => {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const isBreak = iteratorFn(item, i, list);
        if (isBreak === true)
            return true;
    }
};

/**
 * @memberof Array
 * @name removeItemByIndex
 * @description 删除指定index的项，返回新的数组
 * @param {Array} originList -源数组
 * @param {Array} indexList -包含需要删除项index值组成的数组
 * @returns {null|Array} -返回删除指定项后的新数组, 对于原数组中不存在的下标不作处理, 重复下标只删除一次
 */
const removeItemByIndex = (originList, indexList) => {
    if (indexList.length === 0) {
        return shallowCloneList(originList);
    }
    const indexSet = new Set(indexList);
    const resultList = [];
    foreachList(originList, (item, index) => {
        if (indexSet.has(index)) {
            return;
        }
        resultList.push(item);
    });
    return resultList;
};

/**
 * @memberof Array
 * @name range
 * @description 生成一个包含闭区间内所有整数的数组
 * @param {number} from -区间最小值
 * @param {number} to -区间最大值
 * @returns {null|Array} -返回生成的的新数组, 异常返回null
 */
const range = (from, to) => {
    //异常处理
    if (from >= to) {
        return null;
    }
    const rangeList = [];
    for (let i = trunc(from); i <= trunc(to); i++) {
        rangeList.push(i);
    }
    return rangeList;
};

/**
 * @memberof Number
 * @name isFloat
 * @description 判断一个数是否为浮点数
 * @param {number} num - 传入的数
 * @returns {boolean}
 */
const isFloat = (num) => trunc(num) !== num;

/**
 * @memberof Array
 * @name exchangeItemByIndex
 * @description 交换数组中的两项，返回新的数组
 * @param {Array} originList -源数组
 * @param {number} fromIndex -需要交换的项的下标
 * @param {number} toIndex -交换后的项的下标
 * @returns {null|Array} -返回交换后的新数组, 异常返回null
 */
const exchangeItemByIndex = (originList, fromIndex, toIndex) => {
    //异常处理
    if (fromIndex < 0 ||
        fromIndex >= originList.length ||
        toIndex < 0 ||
        toIndex >= originList.length ||
        isFloat(fromIndex) ||
        isFloat(toIndex)) {
        return null;
    }
    const resultList = shallowCloneList(originList);
    const tmpItem = resultList[fromIndex];
    resultList[fromIndex] = resultList[toIndex];
    resultList[toIndex] = tmpItem;
    return resultList;
};

/**
 * @namespace Number
 */
const numberModuleName = "Number";

/**
 * @memberof Number
 * @name abs
 * @description 返回一个数的绝对值
 * @param {number} num - 传入参数
 * @returns {number}
 */
const abs = (num) => Math.abs(num);

/**
 * @memberof Number
 * @name isFloatEqual
 * @description 判断两个浮点数是否相等
 * @param {number} num1 - 第一个浮点数
 * @param {number} num2 - 第二个浮点数
 * @returns {boolean}
 */
const isFloatEqual = (num1, num2) => abs(num1 - num2) < Number.EPSILON;

/**
 * @memberof Number
 * @name isPrime
 * @description 判断一个数是否是素数
 * @param {number} num - 传入的参数
 * @returns {boolean}
 */
const isPrime = (num) => {
    //异常处理
    if (isFloat(num) || num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    // 不在6的倍数两侧的一定不是质数
    if (num % 6 != 1 && num % 6 != 5) {
        return false;
    }
    const sqrt = Math.sqrt(num);
    for (let i = 5; i <= sqrt; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
};

/**
 * @memberof Number
 * @name isLess
 * @description 判断第一个参数是否小于于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
const isLess = (leftNumber, rightNumber) => rightNumber - leftNumber > Number.EPSILON;

/**
 * @memberof Number
 * @name isLessOrEqual
 * @description 判断第一个参数是否小于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
const isLessOrEqual = (leftNumber, rightNumber) => isLess(leftNumber, rightNumber) || isFloatEqual(leftNumber, rightNumber);

/**
 * @memberof Number
 * @name isGreater
 * @description 判断第一个参数是否大于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
const isGreater = (leftNumber, rightNumber) => leftNumber - rightNumber > Number.EPSILON;

/**
 * @memberof Number
 * @name isGreaterOrEqual
 * @description 判断第一个参数是否大于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
const isGreaterOrEqual = (leftNumber, rightNumber) => isGreater(leftNumber, rightNumber) || isFloatEqual(leftNumber, rightNumber);

/**
 * @memberof Number
 * @name inRange
 * @description 判断某个数是否在一个闭区间内
 * @param {number} num - 需要判断的数
 * @param {number} low - 闭区间左值
 * @param {number} high - 闭区间右值
 * @returns {number}
 */
const inRange = (num, low, high) => isGreaterOrEqual(num, low) && isLessOrEqual(num, high);

/**
 * @namespace String
 */
const stringrModuleName = "String";

/**
 * @memberof String
 * @name reverseString
 * @description 反转一个字符串，不修改原字符串
 * @param {string} str
 * @returns {string} 反转后的字符串
 */
const reverseString = (str) => {
    if (str.length === 0 || str.length === 1) {
        return str;
    }
    const strlist = str.split("").reverse();
    return strlist.join("");
};

/**
 * @memberof String
 * @name isPalindrome
 * @description 判断一个字符串是否是回文串
 * @param {string} str
 * @returns {boolean}
 */
const isPalindrome = (str) => {
    //特殊输入
    if (str.length === 0) {
        return false;
    }
    if (str.length === 1) {
        return true;
    }
    let end = str.length - 1;
    for (let front = 0; front < end; front++, end--) {
        if (str[front] !== str[end]) {
            return false;
        }
    }
    return true;
};

/**
 * @memberof String
 * @name matchThroughout
 * @description 通过传入开头和结尾来匹配一个字符串
 * @param {string} originString -源字符串
 * @param {string | RegExp} start -字符串的开头, 如果传入正则表达式不能开启全局匹配
 * @param {string | RegExp} end -字符串的结尾, 如果传入正则表达式不能开启全局匹配
 * @returns {string} 反转后的字符串
 */
const matchThroughout = (originString, start, end) => {
    const startMatch = originString.match(start);
    if (startMatch === null) {
        return null;
    }
    const endMatch = originString.match(end);
    if (endMatch === null) {
        return null;
    }
    const startIndex = startMatch.index;
    const endIndex = endMatch.index;
    if (endIndex < startIndex) {
        return null;
    }
    return originString.slice(startIndex, endIndex + 1);
};

/**
 * @namespace Date
 */
const dateModuleName = "Date";

/**
 * @memberof Date
 * @name getTimezone
 * @description 返回当前时区
 * @returns {Object} 返回一个对象，包含当前时区的相关信息
 * @example {hours: 8, minutes: 15} //hours为正代表东时区，负为西时区
 */
const getTimezone = () => {
    const date = new Date();
    //东区返回负数
    const minutesDistance = -date.getTimezoneOffset();
    const hours = trunc(minutesDistance / 60);
    const minutes = abs(minutesDistance % 60);
    return {
        hours,
        minutes,
    };
};

/**
 * @namespace Object
 */
const objectModuleName = "Object";

/**
 * @name EventBus
 * @memberof Object
 * @description EventBus对象, 拥有on，off，emit方法
 * @returns {EventBus}
 * @example
 * var eventBus = new EventBus()
 * eventBus.on('log', () => {console.log("1")})
 * eventBus.emit('log')
 * eventBus.off('log')
 */
class EventBus {
    constructor() {
        /**
         * @member {Function[]} listenersMap
         */
        // eslint-disable-next-line @typescript-eslint/ban-types
        this.listenersMap = new Map();
    }
    /**
     * @method
     * @param {string} name 监听的方法名
     * @param {Function} callback 监听的回调函数
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    on(name, callback) {
        this.listenersMap.set(name, callback);
    }
    /**
     * @method
     * @param {string} name 要触发的方法名
     * @returns {boolean}
     */
    emit(name) {
        if (this.listenersMap.has(name)) {
            this.listenersMap.get(name)();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @method
     * @param {string} name 要触发的方法名
     * @returns {boolean}
     */
    off(name) {
        return this.listenersMap.delete(name);
    }
}

export { EventBus, abs, arrayModuleName, dateModuleName, exchangeItemByIndex, foreachList, getTimezone, inRange, isFloat, isFloatEqual, isGreater, isGreaterOrEqual, isLess, isLessOrEqual, isPalindrome, isPrime, matchThroughout, numberModuleName, objectModuleName, random, randomItems, range, removeItemByIndex, reverseString, shallowCloneList, stringrModuleName, trunc };
