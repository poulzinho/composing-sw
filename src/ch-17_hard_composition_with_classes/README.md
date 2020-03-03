# Why Composition is Harder with Classes

# The "new" Keyword
- Creates object, binds "this" context in constructor
- Returns "this" context
- Object.getPrototypeOf(instance) === Constructor.prototype
- instance.__proto__ === Constructor.prototype
- instance.constructor === Constructor

Which makes difficult to compose functional mixins.



