import { isFloat } from "../../lib/number";

test("isFloat", () => {
  expect(isFloat(0.1)).toBe(true);
  expect(isFloat(0)).toBe(false);
});
