import {expect} from 'chai';
import {sum} from "./9.1_curry-and-fn-composition";

describe("Curry and Function Composition", () => {
    it("should apply two functions in a curried form", () => {
        expect(sum(2)(4)).to.equal(6);
    });

    it("should allow to use point-free style", () => {
        // inc10 is a specialized version of sum with param 'a' fixed to 1
        const inc10 = sum(10);
        expect(inc10(5)).to.equal(15);
    });

    it("should allow function composition of two functions", () => {
        const g = a => a + 1;
        const f = b => b * 2;
        const h = x => f(g(x));

        const composeFn = (f, g) => x => f(g(x));

        expect(h(30)).to.equal(62);
        expect(composeFn(f,g)(30)).to.equal(62);
    });
});
