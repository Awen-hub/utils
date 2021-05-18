import { abs } from "./abs";

/**
 * @memberof Number
 * @name isFloatEqual
 * @description 判断两个浮点数是否相等
 * @param {number} num1 - 第一个浮点数
 * @param {number} num2 - 第二个浮点数
 * @returns {boolean}
 */
const isFloatEqual = (num1: number, num2: number): boolean =>
  abs(num1 - num2) < Number.EPSILON;

export { isFloatEqual };
