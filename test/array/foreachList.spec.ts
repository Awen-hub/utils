import { foreachList } from "../../lib/array";

test("foreachList", () => {
  const testArr1 = [1, 2, 3];
  foreachList(testArr1, (item, index, arr) => {
    arr[index] = ++item;
  });

  expect(testArr1).toStrictEqual([2, 3, 4]);

  const testArr2 = [1, 2, 3];
  expect(
    foreachList(testArr2, (item, index) => {
      if (index === 1) return true;
    })
  ).toBe(true);

  foreachList(testArr2, (item, index, arr) => {
    if (index === 1) return true;
    arr[index] = ++item;
  });
  expect(testArr2).toStrictEqual([2, 2, 3]);
});
