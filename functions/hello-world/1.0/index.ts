// import { hello } from "../../utils/index";

type FunctionInput = {
  name: string;
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
