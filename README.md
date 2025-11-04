# Tsfix

> It's not yelling at you, just at your types.

## Loose

Type whatever value in type unions without loosing intellisense and type safety.

```ts
type Loose<T> = T | (string & {});
```

## Func

Better function type constructor.

```ts
type Func<T = any, R = any> = (...args: T[]) => R;
```
