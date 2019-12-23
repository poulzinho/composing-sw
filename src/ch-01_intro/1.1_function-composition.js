export const add1 = (x) => x + 1;

export const multiplyBy2 = (x) => x * 2;

export const doStuff = (x) => {
    const afterAdd1 = add1(x);
    const afterMultiplyBy2 = multiplyBy2(afterAdd1);
    return afterMultiplyBy2;
};

export const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const doStuffAsync = (x, time) => new Promise((resolve) => {
    setTimeout(() => resolve(doStuff(x)), time);
});

export const doStuffBetter = x => multiplyBy2(add1(x));
