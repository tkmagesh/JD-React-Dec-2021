import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';
import './index.css';

import * as bugActionCreators from './actions';

const bugsSelector = ({bugs, projects}) => {
    return {
        bugs : bugs.map(bug => ({...bug, projectName : projects.find(project => project.id === bug.projectId).name})),
        projects,
        closedCount : bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    };
};

/* Smart / Container Component */
const Bugs = () => {

    //creating action dispatchers 
    /* 
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, toggle, remove, removeClosed } = bugActionDispatchers; 
    */
    const { addNew, toggle, remove, removeClosed, load } = bindActionCreators(bugActionCreators, useDispatch());

    //extracting state from the store
    /* const {bugs, projects} = useSelector((storeState) => {
        return {
            bugs : storeState.bugs,
            projects : storeState.projects
        }
    }); */

    const { bugs, projects, closedCount } = useSelector(bugsSelector);
    return(
        <>
            <h3>Bugs</h3>
            <button onClick={load}>Load Bugs</button>
            {/* Presentation components */}
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugSort/>
            <BugEdit addNew={addNew} projects= {projects}/>
            <BugList {...{bugs, toggle, remove, removeClosed}}/>
        </>
    )
}

export default Bugs;