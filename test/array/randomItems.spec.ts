import { randomItems, foreachList } from "../../lib/array";

test("randomItems", () => {
  const testArr = [1, 2, 3, 4, 5, 6];
  const resultArr1 = randomItems(testArr, 7);
  expect(resultArr1).toBe(null);
  const resultArr2 = randomItems(testArr, -1);
  expect(resultArr2).toBe(null);
  const resultArr3 = randomItems(testArr)!;
  expect(resultArr3.length).toBe(1);
  expect(testArr.includes(resultArr3[0])).toBe(true);
  let i = 0;
  while (i++ < 20) {
    const resultArr4 = randomItems(testArr, 2)!;
    expect(resultArr4.length).toBe(2);
    foreachList(resultArr4, (item) => {
      expect(testArr.includes(item)).toBe(true);
    });
  }
});
