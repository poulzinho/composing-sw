import {expect} from "chai"
import {default as _} from "./abstraction";

describe("Abstraction and Composition", () => {

    it("should add", () => {
        expect(_.add(2)(3)).to.equal(5);
    });

    it("should increment a number by 1", () => {
        expect(_.increment(3)).to.equal(4);
    });

    it("should increment a number by 10", () => {
        expect(_.inc10(3)).to.equal(13);
    });

    it("should compose with multiple functions", () => {
        const g = n => n + 1;
        const f = n => n * 2;
        const h = _.compose2(f, g);
        expect(h(20)).to.equal(42);
    });

    it("should trace functions bottom-to-top", () => {
        const g = n => n + 1;
        const f = n => n * 2;

        const h =_.compose2(
            _.trace('after f'),
            f,
            _.trace('after g'),
            g
        );

        expect(h(20)).to.equal(42)
    });

    it("should pipe functions preserving order top-to-bottom", () => {
        const g = n => n + 1;
        const f = n => n * 2;

        const h =_.pipe(
            g,
            _.trace('after g'),
            f,
            _.trace('after f'),
        );

        expect(h(20)).to.equal(42)
    });

    it("should flip functions", () => {
        const flippedTrace = _.flip(_.trace2);
        const g = n => n + 1;
        const f = n => n * 2;

        const h =_.pipe(
            g,
            flippedTrace('after g'),
            f,
            flippedTrace('after f'),
        );

        expect(h(20)).to.equal(42)
    });

    it("should map functions", () => {
        const f = n => n * 2;
        const doubleAll = _.map(f);
        const doubled = doubleAll([2, 4, 6]);

        expect(doubled).to.eql([4, 8, 12]);
    });

    it("should reduce by summing up", () => {
        expect([2, 4, 6].reduce(_.summingReducer, 0)).to.equal(12);
    });

});
