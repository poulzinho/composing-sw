export const Identity = value => ({
    map: f => Identity(f(value))
});
