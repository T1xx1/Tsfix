import type { Loose } from './loose';

declare global {
	interface Array<T> {
		includes(searchElement: Loose<T>, fromIndex?: number): boolean;
	}

	interface Map<K, V> {
		has(key: Loose<K>): boolean;
	}

	interface Set<T> {
		has(value: Loose<T>): boolean;
	}
}

export { };