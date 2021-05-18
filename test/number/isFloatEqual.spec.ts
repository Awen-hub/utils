import { isFloatEqual } from "../../lib/number";

test("isFloatEqual", () => {
  expect(isFloatEqual(0.1 + 0.2, 0.3)).toBe(true);
  expect(isFloatEqual(0.1 + 0.21, 0.3)).toBe(false);
});
