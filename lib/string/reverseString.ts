/**
 * @memberof String
 * @name reverseString
 * @description 反转一个字符串，不修改原字符串
 * @param {string} str
 * @returns {string} 反转后的字符串
 */

const reverseString = (str: string): string => {
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  const strlist: string[] = str.split("").reverse();
  return strlist.join("");
};

export { reverseString };
