export const add1 = (x) => x + 1;

export const multiplyBy2 = (x) => x * 2;

export const doStuff = _pipe(
    add1,
    _trace('afterAdd1'),
    multiplyBy2,
    _trace('afterMultiplyBy2')
);

function _trace(label) {
    return value => {
        console.log(`${label}: ${value}`);
        return value;
    };
}

function _pipe(...fns) {
    return x => fns.reduce((y, f) => f(y), x);
}

export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const doStuffAsync = (x, time) => new Promise((resolve) => {
    setTimeout(() => resolve(doStuff(x)), time);
});

export const doStuffBetter = x => multiplyBy2(add1(x));

export const mixin = (...objects) => {
    return objects.reduce((mixedObj, object) => ({...mixedObj, ...object}), {});
};
