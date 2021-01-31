import './App.css';
import IntroDiv from './component/intro-div/intro-div.component'
import LeftBar from '../src/component/left-bar/left-bar.component'
import NavBar from '../src/component/nav-bar/nav-bar.component'
import SkillBoxList from '../src/component/skill-box-list/skill-box-list.component'
import ProjectContainer from '../src/component/project-container/project-container.component'

import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  AOS.init();

  const skills = ['MySQL', 'React', 'Node', 'JS', 'Git', 'CSharp', 'Postgre'];
  const projects = [
    {
      title: 'Free 2 Play Games',
      imgSrc: 'https://user-images.githubusercontent.com/16614788/106375734-99d89a00-6343-11eb-8d2a-bd06a433d5af.jpg',
      usedSkill: ['React'],
      link: 'https://kentiet.github.io/free-to-play-games/'
    },
    {
      title: 'Face Recognition',
      imgSrc: 'https://user-images.githubusercontent.com/16614788/106376276-8f6ccf00-6348-11eb-8b19-d6d72ef7c796.png',
      usedSkill: ['React', 'NodeJS', 'Postgres'],
      link: 'https://kentiet.github.io/free-to-play-games/'
    }
  ]

  return (
    <div className="container-fluid">
      {/* <h1 className='animate__animated animate__bounce'>test</h1> */}
      <div className='row'>
        <NavBar />
      </div>
      <div className='row'>
          <LeftBar />
          <div className='col-12 tc body-content'>
            <section id='home' data-aos="fade-right">
              <IntroDiv />
            </section>
            <section id='experienced' data-aos="fade-left">
              <SkillBoxList skills={skills}/>
            </section>
            <section id='projects' data-aos="fade-right">
              <h2 class="f3 fw4 pa3 mv0">My gigs</h2>
              <ProjectContainer projects={projects}/>
            </section>
          </div>
      </div>
      <div className='row footer-contract animate__animated animate__backInUp' data-aos="fade-up">
        ken.tietkien@gmail.com
        <br />
        <p>Copyright &#169; <span className='contact-email'><a href='mailto:ken.tietkien@gmail.com'>Ken TIet</a></span></p>
      </div>
    </div>
  );
}

export default App;
