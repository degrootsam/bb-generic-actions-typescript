import { test, expect } from "bun:test";
import { hello } from "../../utils";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
