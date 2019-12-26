import {expect} from "chai";
import {compose} from "./3.1_rise-fp";

describe("The Rise of Functional Programming", () => {
    it("should compose, taking the output from one function as the input for another", () => {
        const double = x => x * 2;
        const inc = x => x + 1;

        const transform = compose(double, inc);

        expect(transform(3)).to.equal(8);
    });
});
