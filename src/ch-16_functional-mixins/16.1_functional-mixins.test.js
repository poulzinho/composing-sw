import {expect} from 'chai';
import {flying} from "./16.1_functional-mixins";
import {pipe} from "../ch-10_abstraction-and-composition/10.1_abstraction_and_composition";

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
        const bird = flying({});

        expect(bird.isFlying()).to.be.false;
        expect(bird.fly().isFlying()).to.be.true;
    });

    it("should compose functional mixins", () => {
        const quacking = quack => obj => Object.assign({}, obj, {
            quack: () => quack
        });

        const quacker = quacking('Quack!')({});
        expect(quacker.quack()).equal("Quack!");

        // const createDuck = quack => quacking(quack)(flying({}));

        // using a pipe
        const createDuck = quack => pipe(flying, quacking(quack))({});

        const duck = createDuck('Quack!');
        expect(duck.fly().quack()).equal("Quack!");
    });

    it("should enable implicit dependencies", () => {
        const withLogging = logger => obj => Object.assign({}, obj, {
            log(text) {
                logger(text)
            }
        });

        const withConfig = config => (obj = {
            log: (text = "") => console.log(text)
        }) => Object.assign({}, obj, {
            get(key) {
                return config[key] === undefined
                    ? this.log(`Missing config key: ${key}`)
                    : config[key];
            }
        });

        const createConfig = ({initialConfig, logger}) => pipe(
            withLogging(logger),
            withConfig(initialConfig),
        )({});

        const initialConfig = {
            host: "localhost"
        };

        const logger = console.log.bind(console);

        const config = createConfig({initialConfig, logger});

        expect(config.get("host")).equal("localhost");
        expect(config.get("notThere")).equal(undefined);

    });

});
