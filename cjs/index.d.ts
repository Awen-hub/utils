/**
 * @memberof Array
 * @name exchangeItemByIndex
 * @description 交换数组中的两项，返回新的数组
 * @param {Array} originList -源数组
 * @param {number} fromIndex -需要交换的项的下标
 * @param {number} toIndex -交换后的项的下标
 * @returns {null|Array} -返回交换后的新数组, 异常返回null
 */
declare const exchangeItemByIndex: (originList: any[], fromIndex: number, toIndex: number) => null | any[];
export { exchangeItemByIndex };
/**
 * @memberof Array
 * @name foreachList
 * @description 数组迭代器
 * @param {Array} list -源数组
 * @param {Function} iteratorFn -迭代函数，可传入三个参数,{item: any, index?: number, array?: any[]}，函数返回true可以中断循环
 * @returns {void | boolean} -该函数正常情况不返回任何值，若循环被中断返回true
 */
declare const foreachList: (list: any[], iteratorFn: (item: any, index: number, array: any[]) => boolean | void) => void | boolean;
export { foreachList };
/**
 * @namespace Array
 */
declare const arrayModuleName = "Array";
export { arrayModuleName };
/**
 * @memberof Array
 * @name randomItems
 * @description 从传入数组中获取若干随机项作为返回值, 选取的项可能重复
 * @param {Array} originList -随机项的来源数组
 * @param {number} [targetCounts] -需要返回多少项，默认为1
 * @returns {null|Array} -返回数组的任意一项或者把若干项合并为数组返回, 个别异常返回null
 */
declare const randomItems: (originList: any[], targetCounts?: number) => any[] | null;
export { randomItems };
/**
 * @memberof Array
 * @name range
 * @description 生成一个包含闭区间内所有整数的数组
 * @param {number} from -区间最小值
 * @param {number} to -区间最大值
 * @returns {null|Array} -返回生成的的新数组, 异常返回null
 */
declare const range: (from: number, to: number) => null | number[];
export { range };
/**
 * @memberof Array
 * @name removeItemByIndex
 * @description 删除指定index的项，返回新的数组
 * @param {Array} originList -源数组
 * @param {Array} indexList -包含需要删除项index值组成的数组
 * @returns {null|Array} -返回删除指定项后的新数组, 对于原数组中不存在的下标不作处理, 重复下标只删除一次
 */
declare const removeItemByIndex: (originList: any[], indexList: number[]) => any[];
export { removeItemByIndex };
/**
 * @memberof Array
 * @description 数组浅拷贝
 * @name shallowCloneList
 * @param {Array} originList
 * @returns {Array} 原数组的浅拷贝
 */
declare const shallowCloneList: (originList: any[]) => any[];
export { shallowCloneList };
/**
 * @memberof Date
 * @name getTimezone
 * @description 返回当前时区
 * @returns {Object} 返回一个对象，包含当前时区的相关信息
 * @example {hours: 8, minutes: 15} //hours为正代表东时区，负为西时区
 */
declare const getTimezone: () => {
    hours: number;
    minutes: number;
};
export { getTimezone };
/**
 * @namespace Date
 */
declare const dateModuleName = "Date";
export { dateModuleName };
/**
 * @memberof Number
 * @name abs
 * @description 返回一个数的绝对值
 * @param {number} num - 传入参数
 * @returns {number}
 */
declare const abs: (num: number) => number;
export { abs };
/**
 * @memberof Number
 * @name inRange
 * @description 判断某个数是否在一个闭区间内
 * @param {number} num - 需要判断的数
 * @param {number} low - 闭区间左值
 * @param {number} high - 闭区间右值
 * @returns {number}
 */
declare const inRange: (num: number, low: number, high: number) => boolean;
export { inRange };
/**
 * @memberof Number
 * @name isFloat
 * @description 判断一个数是否为浮点数
 * @param {number} num - 传入的数
 * @returns {boolean}
 */
declare const isFloat: (num: number) => boolean;
export { isFloat };
/**
 * @memberof Number
 * @name isFloatEqual
 * @description 判断两个浮点数是否相等
 * @param {number} num1 - 第一个浮点数
 * @param {number} num2 - 第二个浮点数
 * @returns {boolean}
 */
declare const isFloatEqual: (num1: number, num2: number) => boolean;
export { isFloatEqual };
/**
 * @memberof Number
 * @name isGreater
 * @description 判断第一个参数是否大于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
declare const isGreater: (leftNumber: number, rightNumber: number) => boolean;
export { isGreater };
/**
 * @memberof Number
 * @name isGreaterOrEqual
 * @description 判断第一个参数是否大于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
declare const isGreaterOrEqual: (leftNumber: number, rightNumber: number) => boolean;
export { isGreaterOrEqual };
/**
 * @memberof Number
 * @name isLess
 * @description 判断第一个参数是否小于于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
declare const isLess: (leftNumber: number, rightNumber: number) => boolean;
export { isLess };
/**
 * @memberof Number
 * @name isLessOrEqual
 * @description 判断第一个参数是否小于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */
declare const isLessOrEqual: (leftNumber: number, rightNumber: number) => boolean;
export { isLessOrEqual };
/**
 * @memberof Number
 * @name isPrime
 * @description 判断一个数是否是素数
 * @param {number} num - 传入的参数
 * @returns {boolean}
 */
declare const isPrime: (num: number) => boolean;
export { isPrime };
/**
 * @namespace Number
 */
declare const numberModuleName = "Number";
export { numberModuleName };
/**
 * @memberof Number
 * @description 返回一个范围内的随机数
 * @name random
 * @param {number} low -下界
 * @param {number} high -上界,不可达
 * @returns {number} -返回上界与下届之间的一个数
 */
declare const random: (low: number, high: number) => number;
export { random };
/**
 * @memberof Number
 * @description 取数值整数部分
 * @name trunc
 * @param  {number} num
 * @returns {number}
 */
declare const trunc: (num: number) => number;
export { trunc };
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
declare class EventBus {
    /**
     * @member {Function[]} listenersMap
     */
    private listenersMap;
    /**
     * @method
     * @param {string} name 监听的方法名
     * @param {Function} callback 监听的回调函数
     */
    on(name: string, callback: Function): void;
    /**
     * @method
     * @param {string} name 要触发的方法名
     * @returns {boolean}
     */
    emit(name: string): boolean;
    /**
     * @method
     * @param {string} name 要触发的方法名
     * @returns {boolean}
     */
    off(name: string): boolean;
}
export { EventBus };
/**
 * @namespace Object
 */
declare const objectModuleName = "Object";
export { objectModuleName };
/**
 * @memberof String
 * @name isPalindrome
 * @description 判断一个字符串是否是回文串
 * @param {string} str
 * @returns {boolean}
 */
declare const isPalindrome: (str: string) => boolean;
export { isPalindrome };
/**
 * @memberof String
 * @name matchThroughout
 * @description 通过传入开头和结尾来匹配一个字符串
 * @param {string} originString -源字符串
 * @param {string | RegExp} start -字符串的开头, 如果传入正则表达式不能开启全局匹配
 * @param {string | RegExp} end -字符串的结尾, 如果传入正则表达式不能开启全局匹配
 * @returns {string} 反转后的字符串
 */
declare const matchThroughout: (originString: string, start: string | RegExp, end: string | RegExp) => null | string;
export { matchThroughout };
/**
 * @namespace String
 */
declare const stringrModuleName = "String";
export { stringrModuleName };
/**
 * @memberof String
 * @name reverseString
 * @description 反转一个字符串，不修改原字符串
 * @param {string} str
 * @returns {string} 反转后的字符串
 */
declare const reverseString: (str: string) => string;
export { reverseString };
