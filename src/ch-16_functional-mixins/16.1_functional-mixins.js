export const flying = obj => {
    let isFlying = false;

    return Object.assign({}, obj, {
        fly() {
            isFlying = true;
            return this;
        },
        isFlying: () => isFlying,
        land() {
            isFlying = false;
            return this;
        }
    });
};

export const withLogging = logger => obj => Object.assign({}, obj, {
    log(text) {
        logger(text)
    }
});
