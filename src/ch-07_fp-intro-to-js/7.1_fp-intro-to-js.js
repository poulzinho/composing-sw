export const myReducer = (state = {}, action = {}) => {
    const {type, payload} = action;

    return type === 'FOO'
        ? Object.assign({}, state, payload)
        : state
};
