# What is Functional Programming?

## Functional Programming
- Programming paradigm
- Apps are composed 
    - Using Pure functions
    - Avoiding shared mutable state
    - Without side-effects
- More declarative than imperative

### Pure Functions
- Same inputs always return the same output
- No side-effects

* Referential transparency, replace a function call with a value does not affect the programm.

### Function Composition
- Combine two or more functions into one
```
f(g(x))
```

### Shared State
- Race condition
- Different results depending on the order in which functions are called

* By avoiding shared state, timing and order of function calls do not affect the result

### Immutability
- In Objects. One that cannot be modified after its creation.
