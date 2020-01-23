export const add = (a, b) => a + b;

export const addN = a => b => a + b;

export const map = f => arr => arr.map(f);

export const mapRedu = (fn, arr) => arr.reduce((acc, item) => {
    return acc.concat(fn(item));
}, []);
