import { expect, test } from "@jest/globals";
import { parseActionInput } from "../functions/utils";
import { VariableMap, Record } from "../functions/utils/types";

describe("Action Input Parser", () => {
  test("Variable Map", () => {
    const variableMap: VariableMap = [{ key: "key", value: "value" }];
    expect(parseActionInput.variableMap(variableMap)).toStrictEqual({
      key: "value",
    });
  });

  test("Record", () => {
    const record: Record = { data: { id: 1 } };
    expect(parseActionInput.record(record)).toStrictEqual({ id: 1 });
  });
});
