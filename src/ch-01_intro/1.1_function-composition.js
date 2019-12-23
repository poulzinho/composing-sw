export const add1 = (x) => x + 1;

export const multiplyBy2 = (x) => x * 2;

export const doStuff = (x) => {
    const afterAdd1 = add1(x);
    _trace('afterAdd1')(afterAdd1);
    const afterMultiplyBy2 = multiplyBy2(afterAdd1);
    _trace('afterMultiplyBy2')(afterMultiplyBy2);
    return afterMultiplyBy2;
};

const _trace = label => value => {
    console.log(`${label}: ${value}`);
};

export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const doStuffAsync = (x, time) => new Promise((resolve) => {
    setTimeout(() => resolve(doStuff(x)), time);
});

export const doStuffBetter = x => multiplyBy2(add1(x));
