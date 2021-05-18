import { trunc } from "lib/number/trunc";

/**
 * @memberof Array
 * @name range
 * @description 生成一个包含闭区间内所有整数的数组
 * @param {number} from -区间最小值
 * @param {number} to -区间最大值
 * @returns {null|Array} -返回生成的的新数组, 异常返回null
 */

const range = (from: number, to: number): null | number[] => {
  //异常处理
  if (from >= to) {
    return null;
  }
  const rangeList: number[] = [];
  for (let i = trunc(from); i <= trunc(to); i++) {
    rangeList.push(i);
  }
  return rangeList;
};

export { range };
