import { expect } from "chai"
import intro from "./intro"

describe("Intro", () => {
    it("should increase a number and then double it", () => {
        expect(intro.calculate(3)).to.equal(8);
    });

    it("should return the tail", () => {
        expect(intro.tail(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });

    it("should shif to last", () => {
        expect(intro.shiftToLast(1, 2, 3, 4)).to.eql([2, 3, 4, 1]);
    });
});
