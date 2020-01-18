import {expect} from 'chai';
import {add, addN} from "./10.1_abstraction_and_composition";

describe("Abstraction and Composition", () => {
    it("should fix a parameter in a function", () => {
        const a = add(1, 1);
        const b = add(a, 1);

        expect(b).to.equal(3);
    });

    it("should curry the add function", () => {
        const inc = addN(1);

        const a = inc(1);
        const b = inc(a);

        expect(b).to.equal(3);
    });
});
