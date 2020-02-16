import {assert, expect} from 'chai';
import {flatMap} from "./12.1_monads";

describe("Monads", () => {
    it("should enable flatMap", () => {
        const echo = n => x => Array.from({length: n}).fill(x);

        expect(flatMap(echo(2), [1, 2, 3])).deep.equal([1, 1, 2, 2, 3, 3]);
    })
});
