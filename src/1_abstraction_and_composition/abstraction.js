class Abstraction {

    constructor() {
    }

    _ = {

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
        },

        map: f => arr => arr.map(f),

        summingReducer: (acc, n) => acc + n,

    }

}

export default new Abstraction()._;
