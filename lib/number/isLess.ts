/**
 * @memberof Number
 * @name isLess
 * @description 判断第一个参数是否小于于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */

const isLess = (leftNumber: number, rightNumber: number): boolean =>
  rightNumber - leftNumber > Number.EPSILON;

export { isLess };
