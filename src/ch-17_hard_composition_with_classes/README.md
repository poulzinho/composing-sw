# Why Composition is Harder with Classes

## The "new" Keyword
- Creates object, binds "this" context in constructor
- Returns "this" context
- Object.getPrototypeOf(instance) === Constructor.prototype
- instance.__proto__ === Constructor.prototype
- instance.constructor === Constructor

Which makes difficult to compose functional mixins.


## The Delegate Prototype
"[[Prototype]]" link is used to preserve memory in case it is necessary to handle millions of objects. 
Usually this will not be the case.

### Problem.
Afer reassigning the prototype, "instanceof" will give false negatives when the Constructor.prototype 
does not reference the same object in memory that the instance (prototype) is referencing.

Avoid reassigning the Constructor.prototype.

Also, instanceof is just a nominal type check (not structural).

## The .constructor
Do not use it for type checking.
Do not assume that the "new" keyword is going to work with the constructor's factory function.
