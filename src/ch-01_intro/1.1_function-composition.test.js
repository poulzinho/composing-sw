import {expect} from "chai"
import {add1, doStuff, doStuffAsync, doStuffBetter, multiplyBy2, wait} from './1.1_function-composition';

describe("Function Composition, apply a function to the output of another function", () => {
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
    })
});
