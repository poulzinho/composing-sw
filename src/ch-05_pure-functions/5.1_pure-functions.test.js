import {expect} from "chai";
import {double} from "./5.1_pure-functions";

describe("Pure Functions", () => {
    it("should always return the same output for the same input", () => {
        expect(double(2)).to.equal(4);
        expect(double(2)).to.equal(4);
        expect(double(3)).to.equal(6);
        expect(double(3)).to.equal(6);
    });
});
