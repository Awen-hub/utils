import { isGreaterOrEqual } from "./isGreaterOrEqual";
import { isLessOrEqual } from "./isLessOrEqual";

/**
 * @memberof Number
 * @name inRange
 * @description 判断某个数是否在一个闭区间内
 * @param {number} num - 需要判断的数
 * @param {number} low - 闭区间左值
 * @param {number} high - 闭区间右值
 * @returns {number}
 */

const inRange = (num: number, low: number, high: number): boolean =>
  isGreaterOrEqual(num, low) && isLessOrEqual(num, high);

export { inRange };
