import {expect} from 'chai';
import {add, addN, map} from "./10.1_abstraction_and_composition";

describe("Abstraction and Composition", () => {
    it("should fix a parameter in a function", () => {
        const a = add(1, 1);
        const b = add(a, 1);

        expect(b).to.equal(3);
    });

    it("should curry the add function", () => {
        const inc = addN(1);

        const a = inc(1);
        const b = inc(a);

        expect(b).to.equal(3);
    });

    it("should write map as a curried function", () => {
        const f = n => n * 2;

        const doubleAll = map(f);

        expect(doubleAll([1, 4, 8])).to.deep.equal([2, 8, 16]);
    });

    it("should use a reducer to sum all terms", () => {
        const sumReducer = (acc, n) => acc + n;
        const terms = [2, 4, 5];

        expect(terms.reduce(sumReducer, 0)).to.equal(11);
    })
});
