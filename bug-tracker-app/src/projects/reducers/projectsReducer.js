const initialState = [
    {id : 1, name : 'Expense Manager'},
    {id : 2, name : 'Bug Tracker'}, 
    {id : 3, name : 'Time Tracker'},
];

function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECTS_ADD_NEW')
        return [...currentState, action.payload];
    return currentState;
}

export default projectsReducer;