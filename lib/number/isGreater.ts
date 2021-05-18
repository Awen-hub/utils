/**
 * @memberof Number
 * @name isGreater
 * @description 判断第一个参数是否大于第二个参数
 * @param {number} leftNumber - 第一个参数
 * @param {number} rightNumber - 第二个参数
 * @returns {boolean}
 */

const isGreater = (leftNumber: number, rightNumber: number): boolean =>
  leftNumber - rightNumber > Number.EPSILON;

export { isGreater };
