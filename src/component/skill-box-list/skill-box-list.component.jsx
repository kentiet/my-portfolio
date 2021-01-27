import { React } from "react";
import './skill-box-list.style.scss'

import SkillBox from '../skill-box/skill-box.component'

const SkillBoxList = ({skills}) => (
    <div className="skill-list">
        {
            skills.map((skill, i) => {
                return <SkillBox skillIcon={skill} />
            })
        }
    </div>

)

export default SkillBoxList