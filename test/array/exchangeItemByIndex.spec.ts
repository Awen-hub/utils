import { exchangeItemByIndex } from "../../lib/array";

test("exchangeItemByIndex", () => {
  expect(exchangeItemByIndex([1, 2], 0, 1)).toStrictEqual([2, 1]);
  expect(exchangeItemByIndex([1, 2], 0, 0)).toStrictEqual([1, 2]);
  expect(exchangeItemByIndex([1, 2, 3], 0, 2)).toStrictEqual([3, 2, 1]);
  expect(exchangeItemByIndex([1, 2, 3], -1, 2)).toStrictEqual(null);
  expect(exchangeItemByIndex([1, 2, 3], 1, 3)).toStrictEqual(null);
  expect(exchangeItemByIndex([1, 2, 3], 0.1, 3)).toStrictEqual(null);
});
