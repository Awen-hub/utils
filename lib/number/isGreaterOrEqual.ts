import { isGreater } from "./isGreater";
import { isFloatEqual } from "./isFloatEqual";

/**
 * @memberof Number
 * @name isGreaterOrEqual
 * @description 判断第一个参数是否大于等于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */

const isGreaterOrEqual = (leftNumber: number, rightNumber: number): boolean =>
  isGreater(leftNumber, rightNumber) || isFloatEqual(leftNumber, rightNumber);

export { isGreaterOrEqual };
