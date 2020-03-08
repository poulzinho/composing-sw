export const view = (lens, store) => lens.view(store);
export const set = (lens, value, store) => lens.set(value, store);

// lens function returns accessors for a prop
export const lens = prop => ({
    view: store => store[prop],
    set: (value, store) => ({
        ...store,
        [prop]: value
    })
});

export const over = (lens, f, store) => set(lens, f(view(lens, store)), store);
