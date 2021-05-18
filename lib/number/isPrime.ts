import { isFloat } from "./isFloat";

/**
 * @memberof Number
 * @name isPrime
 * @description 判断一个数是否是素数
 * @param {number} num - 传入的参数
 * @returns {boolean}
 */
const isPrime = (num: number): boolean => {
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
  const sqrt: number = Math.sqrt(num);
  for (let i = 5; i <= sqrt; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
};

export { isPrime };
