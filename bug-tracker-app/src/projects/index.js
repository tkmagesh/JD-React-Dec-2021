import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActionCreators from './actions';

const Projects = () => {
    const {addProject} = bindActionCreators(projectActionCreators, useDispatch());
    const projects = useSelector((storeState) => {
        return storeState.projects
    });
    
    return (
        <>
            <h3>Projects</h3>
            <ol>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ol>
        </>
    )
}

export default Projects;