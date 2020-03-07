import {expect} from 'chai';

describe("Composable custom Data Types", () => {
    it("should describe a factory that returns instances (functions) of numerical data types", () => {
        const t = value => {
            const add = n => t(value + n);

            return Object.assign(add, {
                toString: () => `t(${value})`,
                valueOf: () => value,
            })
        };

        const [x, y, z] = [1, 2, 3];

        // Identity
        expect(t(x)(0).valueOf()).equal(1);
        expect(t(x)(0).valueOf()).equal(t(x).valueOf());

        // Associativity
        expect(t(x)(t(y))(t(z)).valueOf()).equal(6);
        expect(t(x)(t(y)(t(z))).valueOf()).equal(6);
        expect(t(x)(t(y))(t(z)).valueOf()).equal(t(x)(t(y)(t(z))).valueOf());
    });
});
