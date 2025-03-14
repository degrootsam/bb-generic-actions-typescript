import { Record, VariableMap } from "../types";

class ActionInputParser {
  variableMap(input: VariableMap) {
    return input.reduce(
      (acc, { key, value }) => ({ ...acc, [key]: value }),
      {},
    );
  }

  record<T>(input: Record<T>) {
    return input.data;
  }
}

const parseActionInput = new ActionInputParser();
export { parseActionInput as default };
