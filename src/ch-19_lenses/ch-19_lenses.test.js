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

});
