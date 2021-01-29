import { React } from "react";
import './skill-box.styles.scss'

const SkillBox = ({skillIcon}) => (
    <div className="card-item">
        <div className="icon">
            {skillIcon}
        </div>
    </div>
)

export default SkillBox;