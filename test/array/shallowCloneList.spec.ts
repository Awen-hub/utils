import { shallowCloneList } from "../../lib/array";

test("shallowCloneList", () => {
  expect(shallowCloneList([1, 2])).toStrictEqual([1, 2]);
});
