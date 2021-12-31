import bugApi from '../services/bugApi';
/* 
//sync version
export function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
    const action = { type : 'BUGS_REPLACE', payload : toggledBug };
    return action;
} */

//async version
export function toggle(bugToToggle){
    return function(dispatch){
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        bugApi.save(toggledBug)
            .then(savedBug => {
                const action = { type : 'BUGS_REPLACE', payload : savedBug };
                dispatch(action);
            });
    }
}
