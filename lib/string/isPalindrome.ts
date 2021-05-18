/**
 * @memberof String
 * @name isPalindrome
 * @description 判断一个字符串是否是回文串
 * @param {string} str
 * @returns {boolean}
 */

const isPalindrome = (str: string): boolean => {
  //特殊输入
  if (str.length === 0) {
    return false;
  }

  if (str.length === 1) {
    return true;
  }

  let end: number = str.length - 1;
  for (let front = 0; front < end; front++, end--) {
    if (str[front] !== str[end]) {
      return false;
    }
  }
  return true;
};

export { isPalindrome };
