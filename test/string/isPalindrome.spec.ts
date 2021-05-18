import { isPalindrome } from "../../lib/string";
import { foreachList } from "../../lib/array/foreachList";

test("isPalindrome", () => {
  const falseInput = ["", "12", "ab"];
  foreachList(falseInput, (item) => {
    expect(isPalindrome(item)).toBe(false);
  });

  const trueInput = ["1", "121", "aba", "1221"];
  foreachList(trueInput, (item) => {
    expect(isPalindrome(item)).toBe(true);
  });
});
