declare global {
	type Loose<T> = T | (string & {});

	type Strict<T> =
		/* for (type in T union) */
		T extends any ?
			/* T === string */
			string extends T ?
				never
			:	T
		:	never;
}
