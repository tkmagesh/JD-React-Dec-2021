let _currentProjectId = 3;
export function addProject(projectName){
    const newProject = {id : ++_currentProjectId, name : projectName} ;
    return { type : 'PROJECTS_ADD_NEW', payload : newProject};
}
