declare global {
	type Loose<T> = T | (string & {});

	type Strict<T> = T extends any ? (string extends T ? never : T) : never;
}
