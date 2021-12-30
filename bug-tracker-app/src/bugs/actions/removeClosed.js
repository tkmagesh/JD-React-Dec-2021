export function  removeClosed(currentBugs /* TO BE FIXED */){
    const bugsToRetain = currentBugs.filter(bug => !bug.isClosed);
    const action = { type : 'BUGS_INIT', payload : bugsToRetain};
    return action;
}