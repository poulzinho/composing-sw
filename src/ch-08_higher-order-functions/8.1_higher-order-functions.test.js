import {expect} from 'chai';
import {filter, reduce} from "./8.1_higher-order-functions";

describe("High Order Functions", () => {
    it("should show how a reducer works in a reduce function (higher order function)", () => {
        const reducer = (acc, curr) => acc + curr;

        expect(reduce(reducer, 0, [1, 2, 3])).to.equal(6);
    });

    it("should show how a filter works in a censor function", () => {
        const censor = words => filter(word => word.length !== 4, words);
        const words = ["hallo", "chao", "servus"];
        expect(censor(words)).to.deep.equal(["hallo", "servus"]);
    })
});
