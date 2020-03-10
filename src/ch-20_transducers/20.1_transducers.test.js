import {expect} from 'chai';
import {compose} from "../ch-10_abstraction-and-composition/10.1_abstraction_and_composition";
import {curry} from "../ch-07_fp-intro-to-js/7.1_fp-intro-to-js";

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

    it("should apply a transducer", () => {

        const map = fn => step => (a, c) => step(a, fn(c));

        const filter = predicate => step => (a, c) => predicate(c)
            ? step(a, c)
            : a;

        const friends = [
            {id: 1, name: 'Stingo', nearMe: true},
            {id: 2, name: 'Radioheadio', nearMe: false},
            {id: 3, name: 'NINO', nearMe: true},
            {id: 4, name: 'Echonio', nearMe: true},
            {id: 5, name: 'Zeppelinho', nearMe: false}
        ];

        const isNearMe = ({nearMe}) => nearMe;

        const getName = ({name}) => name;

        const getFriendsNearMe = compose(
            filter(isNearMe),
            map(getName)
        );

        const transduce = curry((step, initial, xform, foldable, polo) =>
            foldable.reduce(xform(step), initial));

        const concatArray = (a, c) => a.concat([c]);

        const toArray = transduce(concatArray, []);

        const results = toArray(getFriendsNearMe, friends, 'zakzakyy');

        expect(results).deep.equal(['Stingo', 'NINO', 'Echonio']);
    })

});
