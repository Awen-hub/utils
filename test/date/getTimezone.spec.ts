import { getTimezone } from "../../lib/date";

test("getTimezone", () => {
  const date: Date = new Date();
  const minutesDistance: number = -date.getTimezoneOffset();
  const { hours, minutes } = getTimezone();
  expect(hours * 60 + minutes).toBeCloseTo(minutesDistance);
});
