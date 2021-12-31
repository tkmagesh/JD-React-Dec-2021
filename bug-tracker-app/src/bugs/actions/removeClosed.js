import { remove } from './remove';

export function  removeClosed(){
    return async function(dispatch, getState){
        const bugs = getState().bugs;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove.map(bug => remove(bug)(dispatch));
    }
}

