import {
  TCollection,
  TCollectionWithModelData,
  TRecord,
  TRecordWithModelData,
  TInputVariableMap,
  TPropertyMap,
} from "../types";

class ActionInput {
  parseCollection<T extends { id: number }>(
    collection: TCollection<T> | TCollectionWithModelData<T>
  ): T[] {
    return collection.data;
  }

  parseRecord<T extends { id: number }>(record: TRecord<T> | TRecordWithModelData<T>): T {
    return record.data;
  }

  parseMap<T = any>(map: TInputVariableMap | TPropertyMap): T {
    return map.reduce((prev, curr) => ({ ...prev, [curr.key]: curr.value }), {} as T);
  }
}
const parseActionInput = new ActionInput();

export default parseActionInput;
