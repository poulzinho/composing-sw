export const myReducer = (state = {}, action = {}) => {
    const {type, payload} = action;

    return type === 'FOO'
        ? Object.assign({}, state, payload)
        : state
};

export const newUser = ({name = 'NoName', lastName = 'NoLastName'}) => ({
    name,
    lastName,
});

export const curry = (
    f, arr = []
) => (...args) => (
    a => a.length === f.length
        ? f(...a)
        : curry(f, a)
)([...arr, ...args]);
