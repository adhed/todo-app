import { SET_FILTER_TERM, TOGGLE_FILTER_TERM } from '../actions/actions';

const DEFAULT_STATE = {
    value: '',
    visible: false
};

const setFilterTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { value: action.value });
    return newState;
}

const toggleFilterTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { visible: !state.visible });
    return newState;
}

const filterTermReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_FILTER_TERM:
            return setFilterTerm(state, action);
        case TOGGLE_FILTER_TERM:
            return toggleFilterTerm(state, action);
        default:
            return state;
    }
}

export default filterTermReducer;