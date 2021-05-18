/**
 * @memberof String
 * @name matchThroughout
 * @description 通过传入开头和结尾来匹配一个字符串
 * @param {string} originString -源字符串
 * @param {string | RegExp} start -字符串的开头, 如果传入正则表达式不能开启全局匹配
 * @param {string | RegExp} end -字符串的结尾, 如果传入正则表达式不能开启全局匹配
 * @returns {string} 反转后的字符串
 */

const matchThroughout = (
  originString: string,
  start: string | RegExp,
  end: string | RegExp
): null | string => {
  const startMatch = originString.match(start);
  if (startMatch === null) {
    return null;
  }
  const endMatch = originString.match(end);
  if (endMatch === null) {
    return null;
  }
  const startIndex = startMatch.index;
  const endIndex = endMatch.index!;
  if (endIndex < startIndex!) {
    return null;
  }
  return originString.slice(startIndex, endIndex + 1);
};

export { matchThroughout };
