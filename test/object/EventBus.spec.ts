import { EventBus } from "../../lib/object";

test("EventBus", () => {
  const eventBus = new EventBus();
  let testNum = 0;
  eventBus.on("add", (num: number) => {
    testNum = testNum + num;
  });
  expect(eventBus.emit("add", 1)).toBe(true);
  expect(eventBus.emit("a")).toBe(false);
  expect(testNum).toBe(1);
  expect(eventBus.off("a")).toBe(false);
  expect(eventBus.off("add")).toBe(true);
});
