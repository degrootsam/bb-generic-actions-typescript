import { hello } from "../../src/utils/index";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
