import {expect} from 'chai';

describe("Functors and Categories", () => {
    it("should ensure category identity", () => {
        const a = [10];
        const b = a.map(a => a);

        expect(a).to.deep.equal(b);
    });
});
