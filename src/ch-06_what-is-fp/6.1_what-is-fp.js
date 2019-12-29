const double = x => x * 2;

export const incItem = x => ({...x, val: x.val + 1});

export const doubleItem = x => ({...x, val: x.val * 2});

export const doubleMap = numbers => numbers.map(double);
