import { hello } from "../functions/utils";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
