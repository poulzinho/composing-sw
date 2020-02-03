import {expect} from 'chai';

describe("Functors and Categories", () => {
    it("should ensure category identity", () => {
        const a = [10];
        const b = a.map(a => a);

        expect(a).to.deep.equal(b);
    });

    it("should ensure function composition", () => {
        const add1 = n => n + 1;
        const doubleIt = n => n * 2;

        const mappable = [30];

        const res1 = mappable.map(add1).map(doubleIt);
        const res2 = mappable.map(x => doubleIt(add1(x)));

        expect(res1).to.deep.equal(res2);
    })
});
