import { random } from "lib/number/random";
import { trunc } from "lib/number/trunc";
/**
 * @memberof Array
 * @name randomItems
 * @description  从传入数组中获取若干随机项作为返回值, 选取的项可能重复
 * @param {Array} originList -随机项的来源数组
 * @param {number} [targetCounts] -需要返回多少项，默认为1
 * @returns {null|Array} -返回数组的任意一项或者把若干项合并为数组返回, 个别异常返回null
 */

const randomItems = (originList: any[], targetCounts = 1): any[] | null => {
  if (
    originList.length === 0 ||
    targetCounts > originList.length ||
    targetCounts < 0
  ) {
    // 当原数组为空或者目标数量大于原数组长度，返回null
    return null;
  }
  const resultList = [];
  for (let i = 0; i < targetCounts; i++) {
    const index = trunc(random(0, originList.length));
    resultList.push(originList[index]);
  }
  return resultList;
};

export { randomItems };
