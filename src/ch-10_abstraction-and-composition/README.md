# Abstraction and Composition

## Abstraction
- Generalization. Creating the abstraction, extracting the essence.
- Specialization. Using the abstraction, adding the meaningful for a case.

### Functions make great abstractions.
They have properties
- Identity. Assign and reuse a name
- Composable. Simple functions to make Complex ones.

Pure Functions are the best functions for abstraction.

```
A -> B -> C

// reduces it down to:
A -> C
```

Good abstractions are:
- Composable
- Reusable
- Independent
- Concise
- Simple

## Reduce 
- Fold
- Accumulate

## Redux reducer
- Library/architecture
- To manage app state
- Takes current state -> add action object -> returns new state

### Rules
- Reducer with no params returns initial state
- Reducer not handling action type returns state
- Reducers must be pure functions


