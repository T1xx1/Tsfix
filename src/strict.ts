export type Strict<T> = /* opposite of loose */
	T extends any /* for type in union */
		? string extends T /* if type === string */
			? never
			: T
		: never;
