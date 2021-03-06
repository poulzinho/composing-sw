import {assert, expect} from "chai";
import {spy} from 'sinon';
import {add1, doStuff, doStuffAsync, doStuffBetter, mixin, multiplyBy2, wait} from './1.1_function-composition';

describe("Function Composition, apply a function to the output of another function", () => {
    before(() => {
        spy(console, 'log');
    });

    after(() => {
        console.log.restore();
    });

    it("should add 1 to a number", () => {
        expect(add1(1)).to.equal(2);
    });

    it("should multiply a number by 2", () => {
        expect(multiplyBy2(2)).to.equal(4);
    });

    it("should add 1 to a number and then multiply the result by 2", () => {
        expect(multiplyBy2(add1(20))).to.equal(42);
    });

    it("should add 1 to a number and then multiply the result by 2 using the function doStuff", () => {
        expect(doStuff(20)).to.equal(42);
    });

    it("should compose functions with a promise chain", (done) => {
        wait(300)
            .then(() => 20)
            .then(add1)
            .then(multiplyBy2)
            .then((result) => {
                expect(result).to.equal(42);
                done();
            })
    });

    it("should doStuff asynchronously", (done) => {
        doStuffAsync(20, 300).then((result) => {
            expect(result).to.equal(42);
            done();
        })
    });

    it("should doStuff better (one-liner)", () => {
        expect(doStuffBetter(20)).to.equal(42);
    });

    it("should allow doStuff to be debuggable", () => {
        expect(doStuff(20)).to.equal(42);
        assert(console.log.calledWith('afterAdd1: 21'), 'It is not afterAdd1: 21');
        assert(console.log.calledWith('afterMultiplyBy2: 42'), 'It is not afterMultiplyBy2: 42');
    })
});

describe("Object Composition", () => {
    it("should allow object concatenation aka mixin composition", () => {
        const a = {
            a: "a"
        };

        const b = {
            b: "b"
        };

        expect(mixin(a, b)).to.deep.equal({a: "a", b: "b"});
    });
});
