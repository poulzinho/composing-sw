class Intro {

    constructor() {
    }

    _ = {

        compose: (f, g) => x => f(g(x)),

        double: n => n * 2,

        inc: n => n + 1,

        calculate: (value) => this._.compose(this._.double, this._.increment)(value),

        tail: (head, ...tail) => tail,

        shiftToLast: (head, ...tail) => [...tail, head],

        greaterThan: (x) => (n) => n >= x,

        curry: (f, arr = []) => (...args) =>
            (
                a => a.length === f.length ? f(...a) : curry(f, a)
            )
            ([...arr, ...args]),

        reduce: (reducer, initial, array) => {
            let accumulator = initial;

            array.forEach((x) => {
                accumulator = reducer(accumulator, x);
            });

            return accumulator;
        },

        filter: (fn, array) => this._.reduce((accumulator, current) =>
                (fn(current) ? accumulator.concat([current]) : accumulator),
            [], array
        ),

        add: a => b => a + b,

        increment: (x) => this._.add(1)(x),

        inc10: (x) => this._.add(10)(x),

        compose2: (...fns) => x => fns.reduceRight((y, f) => f(y), x),

        /**
         * it is advisable to put the specializing param first,
         * and the data the function will act on the last
         **/
        trace: label => value => {
            console.log(`${label}: ${value}`);
            return value;
        },

        pipe: (...fns) => x => fns.reduce((y, f) => f(y), x),

        flip: fn => a => b => fn(b)(a),

        trace2: value => label => {
            console.log(`${label}: ${value}`);
            return value;
        }

    }

}

export default new Intro()._;
