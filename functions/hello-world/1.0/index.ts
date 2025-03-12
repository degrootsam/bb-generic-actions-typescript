import { hello } from "../../utils/index.js";

type FunctionInput = {
	name: string;
};

type FunctionOutput = {
	result: string;
};

export default async function helloWorld({
	name,
}: FunctionInput): Promise<FunctionOutput> {
	return {
		result: hello(name),
	};
}
