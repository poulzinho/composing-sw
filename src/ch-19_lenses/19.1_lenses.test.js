import {expect} from 'chai';
import {over, lens, set, view} from "./19.1_lenses";

describe("Lenses", () => {
    it("should describe lenses' getters and setters", () => {
        const getX = ([x]) => x;
        const getY = ([x, y]) => y;
        const getZ = ([x, y, z]) => z;

        expect(getX([100, 200, 1000])).equal(100);
        expect(getY([100, 200, 1000])).equal(200);
        expect(getZ([100, 200, 1000])).equal(1000);
    });

    it("should describe lenses' setters", () => {
        const setY = ([x, _, z]) => y => [x, y, z];

        expect(setY([10, 20, 30])(2000)).deep.equal([10, 2000, 30]);
    });

    it("should use pure functions to view and set with lenses", () => {
        // object to be accessed with a lens
        const initialStore = {
            a: "polo",
            b: "zaky",
        };

        const aLens = lens('a');
        const bLens = lens('b');

        // use view function
        expect(view(aLens, initialStore)).equal('polo');
        expect(view(bLens, initialStore)).equal('zaky');

        // use set function
        const finalStore = set(aLens, 'paulo', initialStore);
        expect(view(aLens, finalStore)).equal('paulo');
    });

    it("should follow the lens laws", () => {
        const initialStore = {
            a: "polo",
            b: "zaky",
        };

        const aLens = lens('a');

        // view(lens, set(lens, value, store)) === value
        expect(view(aLens, set(aLens, 'paulo', initialStore))).equal('paulo');

        const store1 = set(aLens, 'mike', set(aLens, 'paul', initialStore));
        const store2 = set(aLens, 'mike', initialStore);

        // set(lens, b, set(lens, a, store)) === set(lens, b, store)
        expect(store1).deep.equal({
            a: "mike",
            b: "zaky",
        });

        expect(store2).deep.equal({
            a: "mike",
            b: "zaky",
        });

        expect(store1).deep.equal(store2);

        // set(lens, view(lens, store), store) === store
        const store3 = set(aLens, view(aLens, initialStore), initialStore);
        expect(store3).deep.equal(initialStore);
    });

    it("should describe the lens map operation: over", () => {
        const uppercase = x => x.toUpperCase();

        const initialStore = {
            a: "polo",
            b: "zaky",
        };

        const aLens = lens('a');

        expect(over(aLens, uppercase, initialStore)).deep.equal({
            a: "POLO",
            b: "zaky",
        });
    });

    it("should demonstrate that the over operator follows the functor laws", () => {
        const id = x => x;

        const initialStore = {
            a: "polo",
            b: "zaky",
        };

        const aLens = lens('a');

        expect(over(aLens, id, initialStore)).deep.equal(initialStore);
    });

});
