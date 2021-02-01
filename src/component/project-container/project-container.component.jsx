import { Fragment, React } from "react";
import './project-container.styles.scss';
import Tilt from 'react-tilt'


import Project from '../project/project.component'

const ProjectContainer = ({projects}) => (

        <div className='project-container'>
            {
                projects.map((project, i) => {
                    // console.log(project)
                    return <Fragment>
                                <Tilt className="Tilt" options={{ max : 35 , scale: 1.2 , transition: true, easing: "cubic-bezier(.03,.6,0.4,.3)"}}>
                                <Project title={project.title}
                                    imgSrc={project.imgSrc}
                                    usedSkill={project.usedSkill}
                                    link={project.link}/>
                                </Tilt>
                             </Fragment> 
                })
            }

        </div>
)

export default ProjectContainer;