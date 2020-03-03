import {expect} from 'chai';

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
    })
});
