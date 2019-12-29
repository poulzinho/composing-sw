const double = x => x * 2;
const doublePoints = x => x.points * 2;

export const incItem = x => ({...x, val: x.val + 1});

export const doubleItem = x => ({...x, val: x.val * 2});

export const doubleMap = numbers => numbers.map(double);
export const doubleMapRecords = records => records.map(doublePoints);
