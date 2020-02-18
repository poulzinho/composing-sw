import {assert, expect} from 'chai';

describe("Object Composition", () => {

    it("should implement basic object composition using a reducer", () => {
        const assing = (acum, current) => ({...acum, ...current});

        const orig = [{a: "a", b: "b"}];

        const composed = orig.reduce(assing, {});

        expect(orig[0]).to.deep.equal(composed);
    });
});
