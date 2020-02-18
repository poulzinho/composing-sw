import {expect} from 'chai';

describe("Object Composition", () => {
    const objs = [
        {a: "a", b: "ab"},
        {b: "b"},
        {c: "c", b: "cb"},
    ];

    it("should implement basic object composition using a reducer", () => {
        const assing = (acum, current) => ({...acum, ...current});

        const orig = [{a: "a", b: "b"}];

        const composed = orig.reduce(assing, {});

        expect(orig[0]).to.deep.equal(composed);
    });

    it("should describe Aggregation using a reducer", () => {
        const collection = (array, e) => array.concat([e]);

        const a = objs.reduce(collection, []);

        expect(objs).to.deep.equal(a);
    });

    it("should describe Aggregation using a reducer, linked list example", () => {
        const tuple = (a, b) => [b, a];

        const linkedList = objs.reduceRight(tuple, []);

        expect(linkedList)
            .to.deep.equal([
                {a: "a", b: "ab"}, [
                    {b: "b"}, [
                        {c: "c", b: "cb"}, []
                    ]
                ]
            ]
        );
    })
});
