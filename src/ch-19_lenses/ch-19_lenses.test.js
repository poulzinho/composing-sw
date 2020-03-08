import {expect} from 'chai';

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
        // pure functions
        const view = (lens, store) => lens.view(store);
        const set = (lens, value, store) => lens.set(value, store);

        // lens function returns accessors for a prop
        const lens = prop => ({
            view: store => store[prop],
            set: (value, store) => ({
                ...store,
                [prop]: value
            })
        });

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

});
