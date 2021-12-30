import BugItem from './bugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
    const bugItems = bugs.map(bug => (
        <BugItem  key={bug.id} {...{bug, toggle, remove}} />
    ));
    return (
            <section className="list">
            <ol>
                {bugItems}
            </ol>
            <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
        </section>
    )
}
export default BugList;