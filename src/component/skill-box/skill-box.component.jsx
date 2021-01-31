import { React } from "react";
import './skill-box.styles.scss'

const SkillBox = ({skill}) => (
    <div className='card-item'>
            <div className='icon'>
                {skill}
            </div>
    </div>
)

export default SkillBox;