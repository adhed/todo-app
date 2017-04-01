/**
 * created with tutorial from 
 * https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
 */ 
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (!serializedState) {
            return;
        }
        return JSON.parse(serializedState);
    } catch(error) {
        console.debug('Error in loading state:', error);
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(error) {
        console.debug('Error in saving state:', error);
    }
}