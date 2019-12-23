import {expect} from "chai"
import {add1, multiplyBy2, doStuff} from './1.1_function-composition';

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
});
