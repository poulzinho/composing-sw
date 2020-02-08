import {assert, expect} from 'chai';
import {spy} from "sinon";
import {trace} from "../ch-09_curry-and-fn-composition/9.1_curry-and-fn-composition";
import {Identity} from "./11.1_functors_and_categories";
import {curry} from "../ch-07_fp-intro-to-js/7.1_fp-intro-to-js";

describe("Functors and Categories", () => {
    before(() => {
        spy(console, 'log');
    });

    after(() => {
        console.log.restore();
    });

    it("should ensure category identity", () => {
        const a = [10];
        const b = a.map(a => a);

        expect(a).to.deep.equal(b);
    });

    it("should ensure function composition", () => {
        const add1 = n => n + 1;
        const doubleIt = n => n * 2;

        const mappable = [30];

        const res1 = mappable.map(add1).map(doubleIt);
        const res2 = mappable.map(x => doubleIt(add1(x)));

        expect(res1).to.deep.equal(res2);
    });

    it("should allow building a custom functor", () => {

        // Identity law
        const u = Identity(2);

        const a1 = u;
        const a2 = u.map(x => x);

        a1.map(trace('Identity 2'));
        a2.map(trace('Identity 2'));

        assert(console.log.calledWith('Identity 2: 2'), 'Not Identity');
        assert(console.log.calledWith('Identity 2: 2'), 'Not Identity');

        // Composition law
        const add1 = n => n + 1;
        const doubleIt = n => n * 2;

        const a3 = u.map(add1).map(doubleIt);
        const a4 = u.map(x => doubleIt(add1(x)));

        a3.map(trace('Identity 2 double it and add 1'));
        a4.map(trace('Identity 2 double it and add 1'));

        assert(console.log.calledWith('Identity 2 double it and add 1: 6'), 'Not Identity Composition');
        assert(console.log.calledWith('Identity 2 double it and add 1: 6'), 'Not Identity Composition');
    });

    it("should allow to implement a generic map that works with any functor", () => {

        const map = curry((fn, mappable) => mappable.map(fn));
        const log = x => console.log(x);

        const double = n => n * 2;
        const mDouble = map(double);

        mDouble(Identity(4)).map(log);
        mDouble([4]).map(log);

        assert(console.log.calledWith(8), 'Not generic map');
        assert(console.log.calledWith(8), 'Not generic map');
    })
});
