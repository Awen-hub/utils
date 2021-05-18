/**
 * @memberof Array
 * @name foreachList
 * @description 数组迭代器
 * @param {Array} list -源数组
 * @param {Function} iteratorFn -迭代函数，可传入三个参数,{item: any, index?: number, array?: any[]}，函数返回true可以中断循环
 * @returns {void | boolean} -该函数正常情况不返回任何值，若循环被中断返回true
 */

const foreachList = (
  list: any[],
  iteratorFn: (item: any, index: number, array: any[]) => boolean | void
): void | boolean => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const isBreak = iteratorFn(item, i, list);
    if (isBreak === true) return true;
  }
};

export { foreachList };
