import type { Loose } from './loose';

declare global {
	interface Array<T> {
		includes(searchElement: Loose<T>, fromIndex?: number): boolean;
		indexOf(searchElement: Loose<T>, fromIndex?: number): number;
	}
	interface ArrayConstructor {
		isArray(arg: any): arg is unknown;
	}

	interface Body {
		json(): Promise<unknown>;
	}

	interface JSON {
		parse(text: string, reviver?: (this: any, key: string, value: any) => any): unknown;
	}

	interface Map<K, V> {
		has(key: Loose<K>): boolean;
	}

	interface Set<T> {
		has(value: Loose<T>): boolean;
	}
}

export {};
