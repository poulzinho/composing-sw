export const t = value => {
    const add = n => t(value + n);

    return Object.assign(add, {
        toString: () => `t(${value})`,
        valueOf: () => value,
    })
};
