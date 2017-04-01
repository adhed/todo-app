import { 
    SET_FILTER_TERM, 
    TOGGLE_FILTER_TERM,
    ADD_TASK, 
    TOGGLE_TASK_STATE,
    REMOVE_TASK,
    REMOVE_ALL_TASKS,
    SET_FILTER_STATE 
} from './actions';

const setFilterTerm = (value) => {
    return { type: SET_FILTER_TERM, value };
}

const toggleFilterTerm = (visible) => {
    return { type: TOGGLE_FILTER_TERM, visible };
}

const addTask = (content) => {
    return { type: ADD_TASK, content }
}

const removeTask = (id, isCompleted) => {
    return { type: REMOVE_TASK, id, isCompleted }
}

const removeAllTasks = (tasksState) => {
    return { type: REMOVE_ALL_TASKS, tasksState }
}

const setFilterState = (value) => {
    return { type: SET_FILTER_STATE, value }
}

const toggleTaskState = (id) => {
    return { type: TOGGLE_TASK_STATE, id }
}

export { 
    setFilterTerm, 
    addTask,
    removeTask,
    removeAllTasks,
    toggleTaskState, 
    toggleFilterTerm,
    setFilterState
};