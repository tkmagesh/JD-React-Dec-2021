import bugApi from '../services/bugApi';

export function addNew(newBugName, projectId){
    return async function(dispatch){
        const newBugData = { 
            id : 0, 
            name : newBugName, 
            isClosed : false, 
            createdAt : new Date(),
            projectId : projectId
        }
        const newBug = await bugApi.save(newBugData);
        const action = {type : 'BUGS_ADD_NEW', payload : newBug};
        dispatch(action);
    }
}