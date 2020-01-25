# Functors and Categories

Functor Data Type -> Mappable
- To apply a function to the values inside.
- In JS, objects with .map() method. e.g [].map()

But, not all functors iterate.

## Functors are cool
- Underlying data structure is abstracted away. Mapping over arrays, streams, etc...
- Contained data types hidden. Generic functions passed into the .map()
- No extra logic needed on empty data collections.
- Compose functions for the data inside.

## Functor Laws (Axioms)
A functor is a mapping between categories (category: collection of objects and arrows between).
- Identity: 1_A = A -> A
- Composition: A -> B -> C ... A -> C
