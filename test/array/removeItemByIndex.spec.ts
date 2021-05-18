import { removeItemByIndex } from "../../lib/array";

test("removeItemByIndex", () => {
  const testArr = [1, 2, 3, 4, 5];
  expect(removeItemByIndex(testArr, [0, 1, 2, 3, 4])).toStrictEqual([]);
  expect(removeItemByIndex(testArr, [1])).toStrictEqual([1, 3, 4, 5]);
  expect(removeItemByIndex(testArr, [-1])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(removeItemByIndex(testArr, [])).toStrictEqual([1, 2, 3, 4, 5]);
});
