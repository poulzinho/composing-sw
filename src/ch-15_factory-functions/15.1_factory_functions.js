export const withConstructor = constructor => obj => ({
    // delegate [[Prototype]]
    __proto__: {
        constructor
    },
    // mix o's props
    ...obj
});
