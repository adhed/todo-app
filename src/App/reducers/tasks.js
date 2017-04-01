import uuid from 'uuid4';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK_STATE, REMOVE_ALL_TASKS } from '../actions/actions';

const DEFAULT_STATE = {
    tasks: [],
    activeTasks: 0,
    completedTasks: 0
};

const addTask = (state, action) => {
    let newState = {};
    newState = Object.assign(newState, state, { 
        tasks: [...state.tasks, {
            content: action.content,
            render: '',
            id: uuid(),
            isCompleted: false,
        }],
        activeTasks: ++state.activeTasks
    });
    return newState;
};

const removeTask = (state, action) => {
    let newState = {};
    newState = Object.assign(newState, state, {
        tasks: [...state.tasks].filter(task => task.id !== action.id),
        activeTasks: action.isCompleted ? state.activeTasks : --state.activeTasks,
        completedTasks: action.isCompleted ? --state.completedTasks : state.completedTasks,
    });
    return newState;
}

const toggleTaskState = (state, action) => {
     let newState = {};
     let wasCompleted, activeTasks, completedTasks;
     newState = Object.assign(newState, state, {
         tasks: [...state.tasks].map(task => {
            if (task.id === action.id) {
                wasCompleted = task.isCompleted;
                task.isCompleted = !task.isCompleted
            }
            return task;
        }),
        activeTasks: wasCompleted ? ++state.activeTasks : --state.activeTasks,
        completedTasks: wasCompleted ? --state.completedTasks : ++state.completedTasks,
    });
    return newState;
}

const removeAllTasks = (state, action) => {
    let newState = {};
    newState = Object.assign(newState, state, DEFAULT_STATE);
    return newState;
}

const tasksReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ADD_TASK:
            return addTask(state, action);
        case REMOVE_TASK:
            return removeTask(state, action);
        case TOGGLE_TASK_STATE:
            return toggleTaskState(state, action);
        case REMOVE_ALL_TASKS:
            return removeAllTasks(state, action);
        default:
            return state;
    }
}

export default tasksReducer;