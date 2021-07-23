import { React } from "react";
import './project.styles.scss';


const Project = ({title, imgSrc, usedSkill, link, description}) => (
    <div className="card-project" >
        
        <a href={link} className='project-link'>
            <div className="project-image"  style={{backgroundImage: `url(${imgSrc})`}}></div>
                {/* <img src={imgSrc} alt=""/> */}
            <div className='project-desc'>
                <p className='project-title'>{title}</p>
                <p className='desc-text'><strong><u>Description:</u></strong> { description }</p>
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