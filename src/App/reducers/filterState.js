import { SET_FILTER_STATE } from '../actions/actions';
import Constants from '../common/constants';

const DEFAULT_STATE = {
    value: Constants.menuTabs.ACTIVE
};

const setFilterState = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { value: action.value });
    return newState;
}

const filterStateReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_FILTER_STATE:
            return setFilterState(state, action);
        default:
            return state;
    }
}

export default filterStateReducer;