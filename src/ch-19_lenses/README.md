# Lenses

Getter and setter are pure functions that can be composed.

Getter takes an object and return a field.
Setter takes a value, sets it to the object and returns the object updated.

## Motivation
It is useful to have lenses for State shapes because lenses can abstract these shapes
with getters and setters, instead of passing the shape of particular objects.

## Lens laws
```
view(lens, set(lens, value, store)) === value
```
```
set(lens, b, set(lens, a, store)) === set(lens, b, store)
```
```
set(lens, view(lens, store), store) === store
```
