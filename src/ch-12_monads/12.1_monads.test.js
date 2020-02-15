import {expect} from 'chai';
import {flatMap, Monad} from "./12.1_monads";

describe("Monads", () => {
    it("should enable flatMap", () => {
        const echo = n => x => Array.from({length: n}).fill(x);

        expect(flatMap(echo(2), [1, 2, 3])).deep.equal([1, 1, 2, 2, 3, 3]);
    });

    it("should implement a Monad", () => {
        const double = x => x * 2;
        expect(Monad(21).map(double).flatMap(x => x)).equal(42);
    });

    it("should implement the Identity Monad", () => {

        const Id = value => ({
            map: f => Id.of(f(value)),
            flatMap: f => f(value),
        });

        // Type lift
        Id.of = Id;

        expect(Id(3).map(x => x * 2).flatMap(x => x)).equal(6);
    });

});
