import {assert, expect} from 'chai';
import {add} from "./10.1_abstraction_and_composition";

describe("Abstraction and Composition", () => {
    it("should fix a parameter in a function", () => {

        const a = add(1, 1);
        const b = add(a, 1);

        expect(b).to.equal(3);
    });
});
