import { 
    SET_FILTER_TERM, 
    TOGGLE_FILTER_TERM,
    ADD_TASK, 
    REMOVE_TASK 
} from './actions';

const setFilterTerm = (filterTerm) => {
    return { type: SET_FILTER_TERM, filterTerm };
}

const toggleFilterTerm = (visible) => {
    return { type: TOGGLE_FILTER_TERM, visible };
}

const addTask = (content) => {
    return { type: ADD_TASK, content }
}

const removeTask = (id) => {
    return { type: REMOVE_TASK, id }
}

export { 
    setFilterTerm, 
    addTask,
    removeTask,
    toggleFilterTerm
};