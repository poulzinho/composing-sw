# A Functional Programmer's Intro to JS

## Expressions and values
- Variable declaration keywords
    - **var**. re-declaring allowed. re-assign allowed.
    - **let**. Cannot be redeclared, but it can be reassigned.
    - **const**. Cannot be redeclared, cannot be reassigned.
    
Usually, we use **const** in FP

## Types
- Arrays
- Object

## Destructuring
- Arrays
- Objects

## Comparisons and Ternaries
```
>
<
<=
>=
!=
==
!==
===
&&
||
```

## Functions
- Invoke with function call, that applies to arguments
- Evaluates and return value

## Signatures
- Optional function name
- List of parameter types
- Type of return value

## Default parameters
- Assign to parameter in the function signature
```
const identity = (x = 0) => x;
```

## Named arguments
- Use destructuring assignment in the parameter signature

## Rest and Spread
- Gather a group of remaining arguments in the function signature

## Currying
- A function that takes multiple params one at a time
    - Takes a param and returns a function that takes the next param
    - And so on until all params were supplied
    - Then the final value is returned
- JS lacks a built-in autocurry
