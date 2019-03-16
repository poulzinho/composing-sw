import { expect } from "chai"
import sayHello from "./app"

describe("app", () => {
    describe("sayHello function", () => {
        it("should say Welcome to Composing Software in JavaScript!", () => {
            const str = sayHello();
            expect(str).to.equal("Welcome to Composing Software in JavaScript!")
        })
    })
});
