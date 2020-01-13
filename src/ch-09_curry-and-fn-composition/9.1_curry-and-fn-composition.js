export const sum = a => b => a + b;

export const compose = (...fns) => x => fns.reduceRight((acum, f) => f(acum), x);

export const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
};

export const traceInv = value => label => {
    console.log(`${label}: ${value}`);
    return value;
};

export const pipe = (...fns) => x => fns.reduce((acum, f) => f(acum), x);

export const map = fn => mappable => mappable.map(fn);

export const flip = fn => a => b => fn(b)(a);
