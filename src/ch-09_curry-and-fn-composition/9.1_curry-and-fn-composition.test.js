import {expect} from 'chai';

describe("Curry and Function Composition", () => {
    it("should apply two functions in a curried form", ()=> {
        const sum = a => b => a + b;
        expect(sum(2)(4)).to.equal(6);
    })
});
