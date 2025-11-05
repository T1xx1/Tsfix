declare global {
	type Func<T = any, R = any> = (...args: T[]) => R;
}
