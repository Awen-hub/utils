import { range } from "../../lib/array";

test("range", () => {
  expect(range(1, 2)).toStrictEqual([1, 2]);
  expect(range(1, 3)).toStrictEqual([1, 2, 3]);
  expect(range(1, 1)).toBe(null);
  expect(range(1, -1)).toBe(null);
});
