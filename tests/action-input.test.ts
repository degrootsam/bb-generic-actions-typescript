import { parseActionInput } from "../functions/utils";
import { TCollection, TInputVariableMap, TPropertyMap, TRecord } from "../functions/utils/types";

describe("Action Input Parser", () => {
  it("can parse a Record", () => {
    const recordInput: TRecord = { data: { id: 1 } };
    const expectedRecord = { id: 1 };
    const parsedRecord = parseActionInput.parseRecord(recordInput);
    expect(parsedRecord).toStrictEqual(expectedRecord);
  });

  it("can parse a Collection", () => {
    const collectionInput: TCollection = { data: [{ id: 1 }, { id: 2 }] };
    const expectedCollection = [{ id: 1 }, { id: 2 }];
    const parsedCollection = parseActionInput.parseCollection(collectionInput);
    expect(parsedCollection).toStrictEqual(expectedCollection);
  });

  it("can parse a Map", () => {
    const mapInput: TInputVariableMap | TPropertyMap = [
      { key: "name", value: "John" },
      { key: "surname", value: "Doe" },
      { key: "fullName", value: "John Doe" },
    ];
    const expectedMap = { name: "John", surname: "Doe", fullName: "John Doe" };
    const parsedMap = parseActionInput.parseMap(mapInput);
    expect(parsedMap).toStrictEqual(expectedMap);
  });
});
