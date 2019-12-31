import {expect} from 'chai';
import {reduce} from "./8.1_higher-order-functions";

describe("High Order Functions", () => {
    it("should show how a reducer works in a reduce function (higher order function)", () => {
        const reducer = (acc, curr) => acc + curr;

        expect(reduce(reducer, 0, [1, 2, 3])).to.equal(6);
    })
});
