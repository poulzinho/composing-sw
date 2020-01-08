import {assert, expect} from 'chai';
import {compose, map, pipe, sum, trace} from "./9.1_curry-and-fn-composition";
import {spy} from "sinon";

describe("Curry and Function Composition", () => {
    before(() => {
        spy(console, 'log');
    });

    after(() => {
        console.log.restore();
    });

    it("should apply two functions in a curried form", () => {
        expect(sum(2)(4)).to.equal(6);
    });

    it("should allow to use point-free style", () => {
        // inc10 is a specialized version of sum with param 'a' fixed to 1
        const inc10 = sum(10);
        expect(inc10(5)).to.equal(15);
    });

    it("should allow function composition of two functions", () => {
        const f = a => a * 2;
        const g = b => b + 1;
        const h = x => f(g(x));

        const composeFn = (f, g) => x => f(g(x));

        expect(h(30)).to.equal(62);
        expect(composeFn(f, g)(30)).to.equal(62);
    });

    it("should allow function composition of n functions", () => {
        const f = a => a * 2;
        const g = b => b + 1;
        const h = c => c * 3;

        expect(compose(f, g, h)(20)).to.equal(122);
    });

    it("should allow to trace (inspect values) between functions", () => {
        const f = a => a * 2;
        const g = b => b + 1;

        const h = compose(
            trace("after f"),
            f,
            trace("after g"),
            g
        );

        expect(h(30)).to.equal(62);
        assert(console.log.calledWith('after g: 31'), 'It is not after g: 31');
        assert(console.log.calledWith('after f: 62'), 'It is not after f: 62');
    });

    it("should allow to trace between functions in top-to-bottom order", () => {
        const f = a => a * 2;
        const g = b => b + 1;

        const h = pipe(
            g,
            trace('after g'),
            f,
            trace('after f')
        );

        expect(h(30)).to.equal(62);
        assert(console.log.calledWith('after g: 31'), 'It is not after g: 31');
        assert(console.log.calledWith('after f: 62'), 'It is not after f: 62');
    });

    it("should specialize functions by currying, stripe example", () => {
        const array = [1, 2, 3, 4, 5];
        const isEven = x => x % 2 === 0;

        const stripe = n => isEven(n) ? 'even' : 'odd';

        const stripeAll = map(stripe);
        const striped = stripeAll(array);

        expect(striped).to.deep.equal(['odd', 'even', 'odd', 'even', 'odd']);
    });

    it("should specialize functions by currying, doubles example", () => {
        const array = [1, 2, 3, 4, 5];
        const double = x => x * 2;

        const doubleAll = map(double);
        const doubled = doubleAll(array);

        expect(doubled).to.deep.equal([2, 4, 6, 8, 10]);
    })
});
