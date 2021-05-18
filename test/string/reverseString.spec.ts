import { reverseString } from "../../lib/string";

test("reverseString", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("1")).toBe("1");
  expect(reverseString("12")).toBe("21");
  expect(reverseString("00")).toBe("00");
  expect(reverseString("123")).toBe("321");
});
