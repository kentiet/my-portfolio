import './App.css';
import IntroDiv from './component/intro-div/intro-div.component'
import LeftBar from '../src/component/left-bar/left-bar.component'
import NavBar from '../src/component/nav-bar/nav-bar.component'
import SkillBoxList from '../src/component/skill-box-list/skill-box-list.component'
import {mysqlIcon, reactIcon, nodeIcon, jsIcon, gitIcon, csharpIcon, postgreIcon} from '../src/asset/icons/icons'


function App() {

  const skills = [mysqlIcon, reactIcon, nodeIcon, jsIcon, gitIcon, csharpIcon, postgreIcon];

  return (
    <div className="container-fluid">
      {/* <h1 className='animate__animated animate__bounce'>test</h1> */}
      <div className='row'>
        <NavBar />
      </div>
      <div className='row'>
          <LeftBar />
          <div className='col-12 tc'>
            <section id='home'>
              <IntroDiv />
            </section>
            <section id='experienced'>
              <SkillBoxList skills={skills} />
              {/* <SkillBox skillIcon={jsIcon}/>
              <SkillBox skillIcon={nodeIcon}/>
              <SkillBox skillIcon={mysqlIcon}/>
              <SkillBox skillIcon={reactIcon}/>
              <SkillBox skillIcon={gitIcon}/>
              <SkillBox skillIcon={csharpIcon}/>
              <SkillBox skillIcon={postgreIcon}/> */}
            </section>
            <section id='projects'>

            </section>
          </div>
      </div>
    </div>
  );
}

export default App;
