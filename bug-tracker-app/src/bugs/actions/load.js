import axios from 'axios';

function getInMemoryBugs(){
    return [
        { id : 1, name : 'Server error [IM]', isClosed : false, createdAt : Date(), projectId : 1},
        { id : 2, name : 'UI error [IM]', isClosed : false, createdAt : Date(), projectId : 1},
        { id : 3, name : 'Authentication error [IM]', isClosed : false, createdAt : Date(), projectId : 1},
    ]
}

function getServerBugs(){
    console.log('getServerBugs triggered')
    var p = axios.get('http://localhost:3030/bugs');
    var p2 = p.then(function(response){
        return response.data;
    });
    p2.then(function(bugs){
        console.table(bugs);
    });
}

async function getAsyncServerBugs(){
    console.log('getAsyncServerBugs triggered')
    var response = await axios.get('http://localhost:3030/bugs');
    const bugs = response.data
    console.table(bugs);
}

export function load(){
    getAsyncServerBugs();
    const bugs = getInMemoryBugs()
    const action =  { type : 'BUGS_INIT', payload : bugs };
    return action;
}

