import {expect} from "chai"
import {default as _} from "./intro";

describe("Intro", () => {
    it("should increase a number and then double it", () => {
        expect(_.calculate(3)).to.equal(8);
    });

    it("should return the tail", () => {
        expect(_.tail(1, 2, 3, 4)).to.eql([2, 3, 4]);
    });

    it("should shif to last", () => {
        expect(_.shiftToLast(1, 2, 3, 4)).to.eql([2, 3, 4, 1]);
    });

    it("should say if greater than a number", () => {
        const greaterThan4 = _.greaterThan(4);
        expect(greaterThan4(6)).true;
    });

    it("should say if not greater than a number", () => {
        const greaterThan4 = _.greaterThan(4);
        expect(greaterThan4(3)).false;
    });

    it("should autocurry", () => {
        const add3 = _.curry((a, b, c) => a + b + c);
        expect(add3(1, 2, 3)).to.equal(6);
    });

    it("should reduce", () => {
        const myReducer = (acc, curr) => acc + curr;
        expect(_.reduce(myReducer, 0, [1, 2, 3])).to.equal(6);
    });

    it("should filter", () => {
        const array = [1, 2, 3, 4, 5];
        expect(_.filter((n) => n > 2, array)).to.eql([3, 4, 5]);
    });

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
