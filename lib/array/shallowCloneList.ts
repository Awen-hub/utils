/**
 * @memberof Array
 * @description 数组浅拷贝
 * @name shallowCloneList
 * @param {Array} originList
 * @returns {Array} 原数组的浅拷贝
 */

const shallowCloneList = (originList: any[]): any[] => originList.slice();
export { shallowCloneList };
