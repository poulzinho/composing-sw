export const add = (a, b) => a + b;

export const addN = a => b => a + b;

export const map = f => arr => arr.map(f);

export const mapRedu = (fn, arr) => arr.reduce((acc, item) => {
    return acc.concat([fn(item)]);
}, []);

export const filterRed = (fn, arr) => arr.reduce((acc, item) => {
    return fn(item) ? acc.concat([item]) : acc;
}, []);

export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

export const composeRight = (...fns) => x => fns.reverse().reduce((y, f) => f(y), x);

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
