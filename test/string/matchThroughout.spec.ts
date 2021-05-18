import { matchThroughout } from "../../lib/string";

test("matchThroughout", () => {
  expect(matchThroughout("abcdefg", "b", "d")).toBe("bcd");
  expect(matchThroughout("abcdefg", "b", "b")).toBe("b");
  expect(matchThroughout("abcdefg", /a/, /d/)).toBe("abcd");
  expect(matchThroughout("abcdefg", /a/, /a/)).toBe("a");
  expect(matchThroughout("abcdefg", /h/, /a/)).toBe(null);
  expect(matchThroughout("abcdefg", /a/, /h/)).toBe(null);
  expect(matchThroughout("abcdefg", "1", "b")).toBe(null);
  expect(matchThroughout("abcdefg", "a", "2")).toBe(null);
  expect(matchThroughout("abcdefg", "g", "a")).toBe(null);
});
