import { React } from "react";
import './skill-box.styles.scss'

const SkillBox = ({skillIcon}) => (
    <div className="card-item">
        {skillIcon}
    </div>
)

export default SkillBox;