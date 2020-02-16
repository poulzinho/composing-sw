# Monads

A way of composing functions by **mapping** and **flattening**

The purpose is to align the types for type lifting functions functions.

```
a -f-> M(b) and b -g-> M(c)

f then g is (>=>)

h: a >=> M(c)
```

In Javascript.

```
Function composition a => b
Functor F(a).map(a => b) returns F(b)

Monad Monad(a).flatMap(a => M(b)) returns Monad(b)
```
