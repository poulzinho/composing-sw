export const reduce = (reducer, inital, arr) => {
    let acc = inital;

    for (let i = 0, {length} = arr; i < length; i++) {
        acc = reducer(acc, arr[i])
    }

    return acc;
};

export const filter = (fn, arr) => reduce(
    (acc, curr) => fn(curr)
        ? acc.concat([curr])
        : acc,
    [],
    arr
);
