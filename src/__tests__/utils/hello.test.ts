import { hello } from "../../utils";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
