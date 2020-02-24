import {expect} from 'chai';
import {withConstructor} from "./15.1_factory_functions";
import {pipe} from "../ch-10_abstraction-and-composition/10.1_abstraction_and_composition";

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

    it("should support factory functions with default parameters", () => {
        const createUser = (
            {
                userName = "anon",
                avatar = "anon.png"
            } = {}
        ) => ({
            userName,
            avatar,
        });

        const aUser = createUser();

        expect(aUser.userName).equal("anon");
        expect(aUser.avatar).equal("anon.png");
    });

    it("should support factory functions for mixin composition", () => {

        const withFlying = obj => {
            let isFlying = false;
            return {
                ...obj,
                fly() {
                    isFlying = true;
                    return this;
                },
                land() {
                    isFlying = false;
                    return this;
                },
                isFlying: () => isFlying
            }
        };

        const withBattery = ({capacity}) => obj => {
            let percentCharged = 100;
            return {
                ...obj,
                draw(percent) {
                    const remaining = percentCharged - percent;
                    percentCharged = remaining > 0 ? remaining : 0;
                    return this;
                },
                getCharge: () => percentCharged,
                getCapacity: () => capacity,
            }
        };

        const createDrone = ({capacity = '3000mAh'}) => pipe(
            withFlying,
            withBattery({capacity}),
            withConstructor(createDrone)
        )({});

        const myDrone = createDrone({capacity: '5500mAh'});

        expect(myDrone.fly().isFlying()).to.be.true;
        expect(myDrone.land().isFlying()).to.be.false;
        expect(myDrone.getCapacity()).to.equal("5500mAh");
        expect(myDrone.draw(50).getCharge()).equal(50);
        expect(myDrone.draw(75).getCharge()).equal(0);
        expect(myDrone.constructor).to.deep.equal(createDrone);
    });

});
