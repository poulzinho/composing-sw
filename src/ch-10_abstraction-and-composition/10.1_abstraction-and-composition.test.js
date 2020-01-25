import {expect} from 'chai';
import {add, addN, compose, filterRed, map, mapRedu} from "./10.1_abstraction_and_composition";

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
    });

    it("should implement a map using a reducer", () => {
        const by2 = (x) => x * 2;
        const terms = [1, 2, 3, 4];

        expect(mapRedu(by2, terms)).to.deep.equal([2, 4, 6, 8]);
    });

    it("should implement a filter using a reducer", () => {
        const gt5 = (x) => x > 5;
        const terms = [2, 6, 4, 10];

        expect(filterRed(gt5, terms)).to.deep.equal([6, 10]);
    });

    it("should compose functions using a right to left reducer", () => {
        const add1 = x => x + 1;
        const add5 = x => x + 5;
        const multiplyWith3 = x => x * 3;

        const composedFn = compose(add1, add5, multiplyWith3);

        expect(composedFn(5)).to.equal(21);
    });

});
