import { isLess } from "./isLess";
import { isFloatEqual } from "./isFloatEqual";

/**
 * @memberof Number
 * @name isLessOrEqual
 * @description 判断第一个参数是否小于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */

const isLessOrEqual = (leftNumber: number, rightNumber: number): boolean =>
  isLess(leftNumber, rightNumber) || isFloatEqual(leftNumber, rightNumber);

export { isLessOrEqual };
