import { Fragment, React } from "react";
import './skill-box-list.style.scss'
import Tilt from 'react-tilt';

import SkillBox from '../skill-box/skill-box.component'

const SkillBoxList = ({skills}) => (
    <div className="skill-container">
        <div className='top-corner'>
            <span>&#60; skills &#62;</span>
        </div>
        <div className="skill-list">
        {
            skills.map((skill, i) => {
                return (
                    <Fragment>
                        <Tilt options={{ max : 50 , scale: 1.5 , transition: true, easing: "cubic-bezier(.03,.6,0.4,.3)"}}  >
                            <SkillBox key={i} skill={skill}/>
                        </Tilt>

                    </Fragment>
                )
                
            })
        }
        </div>
        <div className='bottom-corner'>
            <span>&#60; /skills &#62;</span>
        </div>
    </div>

)

export default SkillBoxList