import { Fragment, React } from "react";
import './project-container.styles.scss';
import Tilt from 'react-tilt'


import Project from '../project/project.component'

const ProjectContainer = ({projects}) => (
    <div className="project-wrapper">
        <div className='top-corner' >
            <p>#03: My Works</p><hr className='top-corner-underline' data-aos="fade-left"/>
        </div>
        
        <div className='project-container'>

            {
                projects.map((project, i) => {
                    // console.log(project)
                    return <Fragment>
                                <Tilt className="Tilt" options={{ max : 20 , scale: 1 , transition: true, easing: "cubic-bezier(.03,.6,0.4,.3)"}}>
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