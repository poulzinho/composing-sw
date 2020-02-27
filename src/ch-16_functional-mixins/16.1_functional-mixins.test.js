import {expect} from 'chai';

describe("Functional Mixins", () => {

    it("should describe object mixins", () => {

        const choco = {
            hasChoco: () => true
        };

        const strawberry = {
            hasStrawberry: () => true
        };

        const caramel = {
            hasCaramel: () => true
        };

        const iceCream = Object.assign({}, choco, strawberry, caramel);

        expect(iceCream.hasChoco()).to.be.true;
        expect(iceCream.hasStrawberry()).to.be.true;
        expect(iceCream.hasCaramel()).to.be.true;
    });

    it("should describe functional inheritance", () => {

        const base = (spec) => {
            const that = {};
            that.name = spec.name;

            return that;
        };

        const child = (spec) => {
            // create object through the base
            const that = base(spec);

            that.sayHello = () => {
                return `Hello, I am ${that.name}`;
            };

            return that;
        };

        const result = child({name: 'a functional inheritance'});

        expect(result.sayHello()).equal("Hello, I am a functional inheritance");
    });

    it("should describe functional mixins", () => {
        const flying = obj => {
            let isFlying = false;

            return Object.assign({}, obj, {
                fly() {
                    isFlying = true;
                    return this;
                },
                isFlying: () => isFlying,
                land() {
                    isFlying = false;
                    return this;
                }
            });
        };

        const bird = flying({});

        expect(bird.isFlying()).to.be.false;
        expect(bird.fly().isFlying()).to.be.true;
    });
});
