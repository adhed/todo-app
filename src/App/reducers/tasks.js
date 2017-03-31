import uuid from 'uuid4';
import { ADD_TASK, REMOVE_TASK } from '../actions/actions';

const DEFAULT_STATE = [];

const addTask = (state, action) => {
    let newState = [];
    newState = [...state, {
        content: action.content,
        id: uuid(),
        isCompleted: false,
    }];
    return newState;
};

const removeTask = (state, action) => {
    let newState = [];
    newState = [...state]
        .filter(task => task.id !== action.id);
    return newState;
}

const tasksReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ADD_TASK:
            return addTask(state, action);
        case REMOVE_TASK:
            return removeTask(state, action);
        default:
            return state;
    }
}

export default tasksReducer;