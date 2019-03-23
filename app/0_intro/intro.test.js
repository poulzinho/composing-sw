import { expect } from "chai"
import { default as _ } from "./intro";

describe("Intro", () => {
    it("should increase a number and then double it", () => {
        expect(_.calculate(3)).to.equal(8);
    });

    it("should return the tail", () => {
        expect(_.tail(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });

    it("should shif to last", () => {
        expect(_.shiftToLast(1, 2, 3, 4)).to.eql([2, 3, 4, 1]);
    });

    it("should say if greater than a number", () => {
        const greaterThan4 = _.greaterThan(4);
        expect(greaterThan4(6)).true;
    });

    it("should say if not greater than a number", () => {
        const greaterThan4 = _.greaterThan(4);
        expect(greaterThan4(3)).false;
    });

    it("should autocurry", () => {
        const add3 = _.curry((a, b, c) => a + b + c);
        expect(add3(1, 2, 3)).to.equal(6);
    });
});
