import React from 'react'
import ExpDescription from '../exp-description/exp-description.component';
import SkillBoxList from '../skill-box-list/skill-box-list.component';
import './about-me.styles.scss'

const AboutMe = ({ workExp }) => { 

  const skills = ['MySQL', 'React', 'Node', 'JS', 'Git', '.NET', 'Postgre', 'MongoDB'];
  return (
      <div className="aboutme-wrapper">
        <div className='top-corner' >
              <p>#03: About Me</p><hr className='top-corner-underline' data-aos="fade-left"/>
        </div>
        {/* <div className="container-fluid"> */}
          <div className="aboutme-body">
            <div className="aboutme-content">
            <img src="https://img.icons8.com/doodle/48/000000/document.png"/><p className="aboutme-content-header">Profile: </p>
              <p className="profile-body">
                A software developer who experiences in customer service and information technology offers outstanding outcomes in the fast-paced environment.
              </p>
              <SkillBoxList skills={ skills }/>
            </div>
            <div className="aboutme-img">
              <img src="https://user-images.githubusercontent.com/16614788/126822925-413f069a-8661-4f11-8d9f-8c194581fb9b.png" alt=""/>
            </div>
          </div>
          <div className="work-exp-body">
              <img src="https://img.icons8.com/doodle/48/000000/document.png"/><p className="work-content-header">Work Experiences: </p>
              { workExp.map((value, i) => { 
                return (
                  <ExpDescription 
                    key = { i }
                    title={ value.title }
                    year = { value.year }
                    company = { value.company }
                    tasks = { value.tasks }
                  />
                )
              })}
            </div>
        </div>
    // </div>
  )
}

export default AboutMe