import { hello } from "../src/utils";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
