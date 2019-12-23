export const add1 = (x) => x + 1;

export const multiplyBy2 = (x) => x * 2;

export const doStuff = (x) => {
    const afterAdd1 = add1(x);
    const afterMultiplyBy2 = multiplyBy2(afterAdd1);
    return afterMultiplyBy2;
};
