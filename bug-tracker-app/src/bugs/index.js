import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';
import './index.css';

import * as bugActionCreators from './actions';

/* Smart / Container Component */
const Bugs = () => {

    //creating action dispatchers 
    /* 
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, toggle, remove, removeClosed } = bugActionDispatchers; 
    */
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, useDispatch());

    //extracting state from the store
    const bugs = useSelector((storeState) => {
        return storeState.bugs;
    });

    return(
        <>
            <h3>Bugs</h3>
            {/* Presentation components */}
            <BugStats bugs={bugs}/>
            <BugSort/>
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}}/>
        </>
    )
}

export default Bugs;