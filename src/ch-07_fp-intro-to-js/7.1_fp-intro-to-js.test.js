import {expect} from 'chai';
import {myReducer, newUser} from "./7.1_fp-intro-to-js";

describe("Functional Programmer's intro to JS", () => {
    it("should show how to destructure an array", () => {
        const [a, b] = ['a', 'b'];

        expect(a).to.equal('a');
        expect(b).to.equal('b');
    });

    it("should show how to destructure an object", () => {
        const bar = {
            foo: 'foo'
        };

        const {foo} = bar;

        expect(foo).to.equal('foo');
    });

    it("should show how to destructure an object in the context of a Redux", () => {
        const state = {
            bar: 'bar'
        };

        const action = {
            type: 'FOO',
            payload: {
                foo: 'foo'
            }
        };

        expect(myReducer(state, action)).to.deep.equal({foo: 'foo', bar: 'bar'});
        expect(myReducer(state)).to.deep.equal({bar: 'bar'});
        expect(myReducer(undefined, action)).to.deep.equal({foo: 'foo'});
    });

    it("should show how to destructure an object with a different binding name ", () => {
        const foo = {
            foo: 'foo'
        };

        const {foo: bar} = foo;

        expect(bar).to.equal('foo');
    });

    it("should mimic named arguments using destructuring", () => {
        const marcoPolo = newUser({
            name: 'Marco',
            lastName: 'Polo'
        });

        expect(marcoPolo).to.deep.equal({
            name: 'Marco',
            lastName: 'Polo'
        })
    });

    it("should mimic named arguments using destructuring and default parameters", () => {
        const anonymous = newUser({});

        expect(anonymous).to.deep.equal({
            name: 'NoName',
            lastName: 'NoLastName'
        })
    });

    it("should gather together in an array a group arguments in the functions signature, tail example", () => {
        const aTail = (head, ...tail) => tail;
        expect(aTail(1, 3, 6)).to.deep.equal([3, 6]);
    });

    it("should gather together in an array a group arguments in the functions signature, shift to last example", () => {
        const shiftToLast = (head, ...tail) => [...tail, head];
        expect(shiftToLast(1, 3, 6)).to.deep.equal([3, 6, 1]);
    });
});
