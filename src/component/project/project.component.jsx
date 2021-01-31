import { React } from "react";
import './project.styles.scss';


const Project = ({title, imgSrc, usedSkill, link}) => (
    <div className="card-project" >
        
        <a href={link} className='project-link'>
            <div className="project-image"  style={{backgroundImage: `url(${imgSrc})`}}></div>
                {/* <img src={imgSrc} alt=""/> */}
            <div className='project-desc'>
                <h4>{title}</h4>
                <div className="skill">
                    {usedSkill.map((s,i) => {
                        return <span className='skills'>{s}</span>
                    })}
                </div>
            </div>
            
        </a>
    </div>
)

export default Project;