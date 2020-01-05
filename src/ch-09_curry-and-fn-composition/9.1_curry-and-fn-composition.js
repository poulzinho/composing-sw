export const sum = a => b => a + b;

export const compose = (...fns) => x => fns.reduceRight((acum, f) => f(acum), x);
