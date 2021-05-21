import { getTimezone } from "../../lib/date";

test("getTimezone", () => {
  const date: Date = new Date();
  const minutesDistance: number = -date.getTimezoneOffset();
  const { hours, minutes } = getTimezone();
  console.log(hours, minutes, hours * 60 + minutes, minutesDistance);
  expect(hours * 60 + minutes).toBe(minutesDistance);
});
