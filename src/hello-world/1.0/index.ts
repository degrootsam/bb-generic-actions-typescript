import { hello } from "../../utils/index.js";

type FunctionInput = {
	name: string;
};

type FunctionOutput = {
	result: undefined;
};

export default async function helloWorld({
	name,
}: FunctionInput): Promise<FunctionOutput> {
	return {
		result: hello(name),
	};
}
