import { inRange, random } from "../../lib/number";

test("random", () => {
  let i = 0;
  while (i++ < 100) {
    expect(inRange(random(1, 2), 1, 2)).toBe(true);
    expect(inRange(random(1, 1), 1, 1)).toBe(true);
    expect(inRange(random(1, 2), 3, 4)).toBe(false);
    expect(inRange(random(1, 2), 1, 4)).toBe(true);
    expect(inRange(random(1, 2), 0, 4)).toBe(true);
    expect(inRange(random(1, 2), 0, 2)).toBe(true);
    expect(inRange(random(1, 2), -1, 0)).toBe(false);
  }
});
