# Transducers

It is a higher order reducer. A transformation of a transformation.

Input: Reducer.

Output: another Reducer.

## Motivation
Transducer streams elements through the entire pipeline, with
no intermediate groups (arrays, graphs, etc). Thus, saving memory and time.

## Rules

1) Initialization. Default value.

2) Early Termination. Stop when a reduced accumulator value is passed.
Also, convey reduced values.

3) Completion. Should call a completion fn to produce a final value. 



