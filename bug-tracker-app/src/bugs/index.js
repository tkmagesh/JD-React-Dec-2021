import BugStats from './components/bugStats';
import BugSort from './components/bugSort';
import BugEdit from './components/bugEdit';
import BugList from './components/bugList';
import './index.css';

const Bugs = ({bugs, addNew, toggle, remove, removeClosed}) => {
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs}/>
            <BugSort/>
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}}/>
        </>
    )
}

export default Bugs;