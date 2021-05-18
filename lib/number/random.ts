/**
 * @memberof Number
 * @description 返回一个范围内的随机数
 * @name random
 * @param {number} low -下界
 * @param {number} high -上界,不可达
 * @returns {number} -返回上界与下届之间的一个数
 */

const random = (low: number, high: number): number => {
  const distance = high - low;
  return low + distance * Math.random();
};

export { random };
