import {expect} from "chai";
import {addToCart, double} from "./5.1_pure-functions";

describe("Pure Functions", () => {
    it("should always return the same output for the same input", () => {
        expect(double(2)).to.equal(4);
        expect(double(2)).to.equal(4);
        expect(double(3)).to.equal(6);
        expect(double(3)).to.equal(6);
    });

    it("should have no side effects", () => {
        const originalCart = {
            products: []
        };
        const newCart = addToCart(originalCart, {name: "product A"}, 3);

        expect(originalCart).to.be.not.deep.equal(newCart);
    })
});
