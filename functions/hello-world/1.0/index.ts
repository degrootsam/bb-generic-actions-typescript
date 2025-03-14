// import { hello } from "../../utils/index";

import { VariableMap, Record } from "../../utils/types";

type FunctionInput = {
  name: string;
  record?: Record<{ id: string }>;
  variableMap?: VariableMap;
};

type FunctionOutput = {
  result: string;
};

async function helloWorld({ name }: FunctionInput): Promise<FunctionOutput> {
  return {
    result: name,
  };
}

export { helloWorld as default };
