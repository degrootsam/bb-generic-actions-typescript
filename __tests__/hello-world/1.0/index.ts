import { describe, it, expect } from "@jest/globals";
import helloWorld from "../../../src/hello-world/1.0";

describe("helloWorld/1.0", () => {
  it("should return a greeting", async () => {
    // Arrange
    const input = { name: "John" };
    const expected = { result: "Hello, John" };

    // Act
    const result = await helloWorld(input);

    // Assert
    expect(result).toStrictEqual(expected);
  });
});

// Read https://jestjs.io/docs/getting-started for more info on writing tests with Jest
