export default {

    calculate(value) {

        const compose = (f, g) => x => f(g(x));

        const double = n => n * 2;
        const increment = n => n + 1;

        return compose(double, increment)(value);
    },

    tail(head, ...tail) {
        return tail
    },

    shiftToLast(head, ...tail) {
        return [...tail, head];
    },

    greaterThan(x) {
        return (n) => n >= x;
    },

    curry(f, arr = []) {
        return (...args) => (
            a => a.length === f.length ? f(...a) : curry(f, a)
        )([...arr, ...args]);
    },

    reduce(reducer, initial, array) {
        let accumulator = initial;

        array.forEach((x) => {
            accumulator = reducer(accumulator, x);
        });

        return accumulator;
    }
}
