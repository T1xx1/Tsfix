# Tsfix

> It's not yelling at you, just at your types.

## Loose

Type whatever value in type unions without loosing intellisense and type safety.

```ts
export type Loose<T> = T | (string & {});
```

## Func

Better function constructore type.

```ts
export type Func<T = any, R = any> = (...args: T[]) => R;
```
