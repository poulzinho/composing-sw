import { expect } from "chai"
import intro from "./intro"

describe("Intro", () => {
    it("should increase a number and then double it", () => {
        expect(intro.calculate(3)).to.equal(8);
    })
});
