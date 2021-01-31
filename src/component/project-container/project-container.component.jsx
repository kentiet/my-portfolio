import { Fragment, React } from "react";
import './project-container.styles.scss';
import Tilt from 'react-tilt'


import Project from '../project/project.component'

const ProjectContainer = ({projects}) => (
    <div className='project-container'>
        <h2 class="f3 fw4 pa3 mv0">My gigs</h2>
        <div class="cf pa2">
            {
                projects.map((project, i) => {
                    // console.log(project)
                    return <Fragment>
                                <Tilt className="Tilt" options={{ max : 25 }}>
                                <Project title={project.title}
                                    imgSrc={project.imgSrc}
                                    usedSkill={project.usedSkill}
                                    link={project.link}/>
                                </Tilt>
                             </Fragment> 
                })
            }

        </div>
    </div>
)

export default ProjectContainer;