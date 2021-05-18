import { isPrime } from "../../lib/number";
import { foreachList } from "../../lib/array/foreachList";

test("isPrime", () => {
  const primeLists = [2, 3, 5, 7, 11, 101, 71, 53];
  foreachList(primeLists, (item) => {
    expect(isPrime(item)).toBe(true);
  });
  const notPrimeLists = [4, 6, 8, 10, 12, 106, 108, 25];
  foreachList(notPrimeLists, (item) => {
    expect(isPrime(item)).toBe(false);
  });
  const strangeInput = [-0.3, -1, 0.5, 1, 0, 4.2];
  foreachList(strangeInput, (item) => {
    expect(isPrime(item)).toBe(false);
  });
});
