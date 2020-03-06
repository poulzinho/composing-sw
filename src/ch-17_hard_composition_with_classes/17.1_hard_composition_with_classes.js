import {assert, expect} from 'chai';

describe("Composition is harder with Classes", () => {
    it("should show the problem of reassigning the prototype", () => {
        class User {
            constructor({username, avatar}) {
                this.username = username;
                this.avatar = avatar;
            }
        }

        const aUser = new User({
            username: "Polo",
            avatar: "polo.png",
        });

        expect(aUser instanceof User).to.be.true;

        User.prototype = {};

        // False
        expect(aUser instanceof User).to.be.false;

        // Event when they have the same data
        expect(aUser).to.deep.equal({
            username: "Polo",
            avatar: "polo.png",
        })
    });

    it("should return an empty instance of an object type", () => {
        const empty = ({constructor} = {}) => {
            console.log('this is the constructor', constructor);
            return constructor ? new constructor() : undefined
        };

        const array = [20];
        const promise = Promise.resolve(10);

        expect(empty(array)).deep.equal([]);

        assert.throw(
            () => empty(promise),
            TypeError,
            "Promise resolver undefined is not a function"
        );
    });

    it("should return an empty instance of any object type", () => {
        const empty = ({constructor} = {}) => constructor.of ? constructor.of() : undefined;

        const array = [22];
        const promise = Promise.resolve(20);

        expect(empty(array));
        expect(empty(promise)).to.be.undefined;
    });

    it("should add support for .of to factories", () => {
        const createUser = (
            {
                userName = "default",
                avatar = "default.png"
            } = {}) => ({
            userName,
            avatar,
            constructor: createUser
        });

        createUser.of = createUser;

        const empty = ({constructor} = {}) => constructor.of ? constructor.of() : undefined;

        const aUser = createUser({userName: "polo", avatar: "polo.png"});

        expect(empty(aUser)).deep.equal({
            constructor: createUser,
            userName: "default",
            avatar: "default.png",
        });

        expect(aUser.constructor).equal(createUser.of);
        expect(createUser.of).equal(createUser);
    });

    it("should make a constructor non-enumerable", () => {

        const createUser = (
            {
                userName = "default",
                avatar = "default.png"
            } = {}) => ({
            __proto__: {
                constructor: createUser
            },
            userName,
            avatar,
        });

        createUser.of = createUser;

        const aUser = createUser({userName: "polo", avatar: "polo.png"});

        const empty = ({constructor} = {}) => constructor.of ? constructor.of() : undefined;

        expect(empty(aUser)).deep.equal({
            __proto__: {
                constructor: createUser
            },
            userName: "default",
            avatar: "default.png",
        });
    });

});
