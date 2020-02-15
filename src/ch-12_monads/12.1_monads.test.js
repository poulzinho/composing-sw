import {expect} from 'chai';
import {flatMap} from "./12.1_monads";

describe("Monads", () => {
    it("should enable flatMap", () => {
        const echo = n => x => Array.from({length: n}).fill(x);

        expect(flatMap(echo(2), [1, 2, 3])).deep.equal([1, 1, 2, 2, 3, 3]);
    });

    it("should implement a Monad", () => {
        const Monad = value => ({
            flatMap: f => {
                console.log('** flatMap');
                console.log('-- f', f.toString());
                console.log('-- value', value);
                return f(value)
            },
            map(f) {
                console.log('* map');
                console.log('- f', f.toString());
                console.log('- value', value);

                return this.flatMap(a => {
                    console.log('exec flatMap f');
                    console.log('--- f', f.toString());
                    console.log('--- a', a);
                    console.log('--- f(a)', f(a));
                    console.log('--- Monad.of', Monad.of(f(a)));
                    return Monad.of(f(a))
                });
            }
        });

        Monad.of = x => {
            console.log('*** Monad(x)', x);
            return Monad(x)
        };

        expect(Monad(21).map(x => x * 2).flatMap(x => x)).equal(42);
    });
});
