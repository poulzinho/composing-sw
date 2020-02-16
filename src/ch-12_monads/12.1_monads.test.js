import {expect} from 'chai';
import {flatMap, Monad, IdMonad} from "./12.1_monads";

describe("Monads", () => {
    it("should enable flatMap", () => {
        const echo = n => x => Array.from({length: n}).fill(x);

        expect(flatMap(echo(2), [1, 2, 3])).deep.equal([1, 1, 2, 2, 3, 3]);
    });

    it("should allow composition and type lifting, Kleisli composition", () => {

        const composeM = method => (...ms) => (
            ms.reduce((f, g) => x => g(x)[method](f))
        );

        const composePromises = composeM('then');

        const getUserById = id => id === 2
            ? Promise.resolve({name: 'Polo', role: 'Admin'})
            : Promise.resolve({name: 'unknown', role: 'unknown'});

        const hasPermission = ({role}) => (Promise.resolve(role === 'Admin'));

        const authUser = composePromises(hasPermission, getUserById);

        return authUser(3).then((authorization) => {
            expect(authorization).equal(false);
        });
    });

    it("should implement a Monad", () => {
        const double = x => x * 2;
        expect(Monad(21).map(double).flatMap(x => x)).equal(42);
    });

    it("should implement the Identity Monad", () => {
        const double = x => x * 2;
        expect(IdMonad(3).map(double).flatMap(x => x)).equal(6);
    });

    it("should prove that Identity Monad follows the monad laws", () => {
        const g = n => IdMonad(n + 1);
        const f = n => IdMonad(n * 2);

        // Left Identity
        expect(IdMonad(20).flatMap(f).toString()).equal(f(20).toString());

        // Right Identity
        expect(IdMonad(20).flatMap(IdMonad.of).toString())
            .equal(IdMonad(20).toString());

        // Associativity
        expect(IdMonad(20).flatMap(g).flatMap(f).toString())
            .equal(IdMonad(20).flatMap(x => g(x).flatMap(f)).toString());
    });

});
