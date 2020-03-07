import {expect} from 'chai';
import {pipe} from "../ch-10_abstraction-and-composition/10.1_abstraction_and_composition";
import {t} from './18.1_composable_data_types';

describe("Composable custom Data Types", () => {
    it("should describe a factory that returns instances (functions) of numerical data types", () => {
        const [x, y, z] = [1, 2, 3];

        // Identity
        expect(t(x)(0).valueOf()).equal(1);
        expect(t(x)(0).valueOf()).equal(t(x).valueOf());

        // Associativity
        expect(t(x)(t(y))(t(z)).valueOf()).equal(6);
        expect(t(x)(t(y)(t(z))).valueOf()).equal(6);
        expect(t(x)(t(y))(t(z)).valueOf()).equal(t(x)(t(y)(t(z))).valueOf());
    });

    it("should use a pipeline with an initial value", () => {
        const add = (...fns) => pipe(...fns)(t(0));

        const sum = add(
            t(4),
            t(4),
            t(-1),
        );

        expect(sum.valueOf()).equal(7);
    });
});
