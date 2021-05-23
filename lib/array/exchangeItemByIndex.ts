import { shallowCloneList } from "./shallowCloneList";
import { isFloat } from "../number/isFloat";
/**
 * @memberof Array
 * @name exchangeItemByIndex
 * @description 交换数组中的两项，返回新的数组
 * @param {Array} originList -源数组
 * @param {number} fromIndex -需要交换的项的下标
 * @param {number} toIndex -交换后的项的下标
 * @returns {null|Array} -返回交换后的新数组, 异常返回null
 */

const exchangeItemByIndex = (
  originList: any[],
  fromIndex: number,
  toIndex: number
): null | any[] => {
  // 异常处理
  if (
    fromIndex < 0 ||
    fromIndex >= originList.length ||
    toIndex < 0 ||
    toIndex >= originList.length ||
    isFloat(fromIndex) ||
    isFloat(toIndex)
  ) {
    return null;
  }
  const resultList: any[] = shallowCloneList(originList);
  const tmpItem: any = resultList[fromIndex];
  resultList[fromIndex] = resultList[toIndex];
  resultList[toIndex] = tmpItem;
  return resultList;
};

export { exchangeItemByIndex };
