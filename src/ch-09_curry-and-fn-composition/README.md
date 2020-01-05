# Curry and Function Composition

## Curried function
- Takes multiple arguments one at a time
- Returns a function that takes one argument and returns a function that takes the next argument... 
- The last function returns the result

Usually, the curried function take one argument and returns
- a **partial application**
- with a **fixed** variable 

in the closure scope.

## Closure
Function bundled with a lexical scope, created at runtime, with the fixed (variable assigned in the bundled scope).

## Partial Application
Function which was applied to some (but not all) of its arguments.

## Partial Application vs Curried functions
- Partial apps
    - Can take as many arguments a time as desired
- Curried functions
    - Return a unary function (just takes one arg)

All curried fns return partial apps. However, not all partial apps result from curried fns.

## Point-free style
- Define functions without declaring formal parameters
    - function and arrow functions (=>) cannot be used
    - instead call a function that returns a function with its own closure and fixed variable
    
## Why to curry
- For function composition

## Trace
How to debug function composition?
How to inspect the values between fns?
Trace helps to do that with a curried function
