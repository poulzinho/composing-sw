import {expect} from 'chai';

describe("Functional Mixins", () => {

    it("should describe object mixins", () => {

        const choco = {
            hasChoco: () => true
        };

        const strawberry = {
            hasStrawberry: () => true
        };

        const caramel = {
            hasCaramel: () => true
        };

        const iceCream = Object.assign({}, choco, strawberry, caramel);

        expect(iceCream.hasChoco()).to.be.true;
        expect(iceCream.hasStrawberry()).to.be.true;
        expect(iceCream.hasCaramel()).to.be.true;
    });
});
