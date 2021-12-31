import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
});

//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

/* function loggerMiddleware(store){
    return function(next){
        return function (action){ //invoked whenever an action is dispatched
            console.group(action.type)
            console.log('%c prev state', 'color: red', store.getState());
            console.log('%c action', 'color: yellow', action);
            const returnValue = next(action);
            console.log('%c next state', 'color: green', store.getState());
            return returnValue;
        }
    }
}
 */

const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('%c prev state', 'color: red', store.getState());
    console.log('%c action', 'color: yellow', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    return returnValue;
}

function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch);
            }
            return next(action);
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default store;