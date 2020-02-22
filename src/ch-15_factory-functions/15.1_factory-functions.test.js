import {expect} from 'chai';

describe("Factory Functions", () => {

    it("should support method syntax to create objects", () => {
        const user = {
            userName: "noName",
            avatar: "noAvatar",
            setUserName(username) {
                this.userName = username;
                return this;
            },
            setAvatar(avatar) {
                this.avatar = avatar;
                return this;
            }
        };

        const username = "Polo";
        const avatar = "polo.png";

        const aUser = user
            .setUserName(username)
            .setAvatar(avatar);

        expect(aUser.userName).equal("Polo");
        expect(aUser.avatar).equal("polo.png");
    });

    it("should support factory functions to create many user objects", () => {

        const createUser = ({userName, avatar}) => ({
            userName,
            avatar,
            setUserName(username) {
                this.userName = username;
                return this;
            },
        });

        const aUser = createUser({userName: "Polo", avatar: "polo.png"});

        expect(aUser.userName).equal("Polo");
        expect(aUser.avatar).equal("polo.png");
    });

});
