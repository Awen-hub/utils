import { isGreater } from "../../lib/number";

test("isGreater", () => {
  expect(isGreater(0.1, 0.01)).toBe(true);
  expect(isGreater(0.1, -0.01)).toBe(true);
  expect(isGreater(-1, -2)).toBe(true);
  expect(isGreater(-1, -1)).toBe(false);
  expect(isGreater(1, 2)).toBe(false);
});
