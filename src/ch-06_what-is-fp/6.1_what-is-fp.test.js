import {assert, expect} from "chai";
import {doubleItem, doubleMap, incItem} from "./6.1_what-is-fp";

describe("What is Functional Programming", () => {
    it("should avoid mutating shared state", () => {
        const itemA = {
            val: 2
        };

        const itemB = {
            val: 2
        };

        expect((incItem(doubleItem(itemA))).val).to.equal(5);
        expect(itemA.val).to.equal(2);

        expect((incItem(doubleItem(itemB))).val).to.equal(5);
        expect(itemB.val).to.equal(2);
    });

    it("should use immutable objects", () => {
        const anObject = Object.freeze({
            foo: "Hola",
            bar: "Mundo"
        });

        assert.throw(
            () => anObject["foo"] = "Chao",
            TypeError,
            "Cannot assign to read only property 'foo' of object '#<Object>'"
        );
    });

    it("should encourage the usage of mappers", () => {
        expect(doubleMap([2, 3, 5])).to.deep.equal([4, 6, 10]);
    });
});
