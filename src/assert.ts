export const assert = <T>(arg: T): never => {
	throw new Error(`Assertion failed: ${arg}`);
};

export const assertUnreachable = (arg: never): never => {
	throw new Error(`Unreachable case: ${arg}`);
};
