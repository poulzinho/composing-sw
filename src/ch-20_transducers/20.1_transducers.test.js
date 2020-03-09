import {expect} from 'chai';
import {compose} from "../ch-10_abstraction-and-composition/10.1_abstraction_and_composition";

describe("Transducers", () => {

    it("should describe a simple transducer", () => {

        const map = fn => step => (a, c) => step(a, fn(c));

        const filter = predicate => step => (a, c) => predicate(c)
            ? step(a, c)
            : a;

        const isEven = n => n % 2 === 0;
        const double = n => n * 2;

        const doubleEvens = compose(
            filter(isEven),
            map(double),
        );

        const arrayConcatStep = (a, c) => a.concat([c]);

        const xform = doubleEvens(arrayConcatStep);

        expect([1, 2, 3, 4, 5].reduce(xform, [])).deep.equal([4, 8]);
    });

});
