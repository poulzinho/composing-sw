export const sum = a => b => a + b;

export const compose = (...fns) => x => fns.reduceRight((acum, f) => f(acum), x);

export const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
};
