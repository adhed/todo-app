import { SET_FILTER_TERM, CHANGE_FOUNDED_TASKS, TOGGLE_FILTER_TERM } from '../actions/actions';

const DEFAULT_STATE = {
    value: '',
    foundedTasks: 0,
    visible: false
};

const setFilterTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { value: action.value });
    return newState;
}

const changeFoundedTasks = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { foundedTasks: action.foundedTasks });
    return newState;
}

const toggleFilterTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { 
        visible: !state.visible,
        value: DEFAULT_STATE.value,
        foundedTasks: DEFAULT_STATE.foundedTasks
    });
    return newState;
}

const filterTermReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_FILTER_TERM:
            return setFilterTerm(state, action);
        case CHANGE_FOUNDED_TASKS:
            return changeFoundedTasks(state, action);
        case TOGGLE_FILTER_TERM:
            return toggleFilterTerm(state, action);
        default:
            return state;
    }
}

export default filterTermReducer;