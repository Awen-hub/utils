import { shallowCloneList } from "./shallowCloneList";
import { foreachList } from "./foreachList";
/**
 * @memberof Array
 * @name removeItemByIndex
 * @description 删除指定index的项，返回新的数组
 * @param {Array} originList -源数组
 * @param {Array} indexList -包含需要删除项index值组成的数组
 * @returns {null|Array} -返回删除指定项后的新数组, 对于原数组中不存在的下标不作处理, 重复下标只删除一次
 */

const removeItemByIndex = (originList: any[], indexList: number[]): any[] => {
  if (indexList.length === 0) {
    return shallowCloneList(originList);
  }

  const indexSet: Set<number> = new Set(indexList);
  const resultList: any[] = [];
  foreachList(originList, (item, index) => {
    if (indexSet.has(index)) {
      return;
    }
    resultList.push(item);
  });
  return resultList;
};

export { removeItemByIndex };
