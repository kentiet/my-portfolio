import './App.css';
import IntroDiv from './component/intro-div/intro-div.component'
import NavBar from '../src/component/nav-bar/nav-bar.component'
import ProjectContainer from '../src/component/project-container/project-container.component'

import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './component/about-me/about-me.component';
import Footer from './component/footer/footer.component';



function App() {

  AOS.init();

  
  const projects = [
    {
      title: 'Inventory System Management',
      imgSrc: 'https://user-images.githubusercontent.com/16614788/126815876-1d494dcf-cfb5-4d8d-b064-de2026e4636b.png',
      usedSkill: ['React', 'NodeJS', 'MongoDB', 'Ldap.js'],
      link: 'https://mern-inventory.netlify.app/',
      description: 'Inventory system built with MERN stack & hosted on Netlify and Heroku'
    },
    {
      title: 'Free 2 Play Games',
      imgSrc: 'https://user-images.githubusercontent.com/16614788/106375734-99d89a00-6343-11eb-8d2a-bd06a433d5af.jpg',
      usedSkill: ['React'],
      link: 'https://kentiet.github.io/free-to-play-games/',
      description: 'Single page to display all the free to play games'
    },
    {
      title: 'Face Recognition',
      imgSrc: 'https://user-images.githubusercontent.com/16614788/106376276-8f6ccf00-6348-11eb-8b19-d6d72ef7c796.png',
      usedSkill: ['React', 'NodeJS', 'Postgres'],
      link: 'https://github.com/kentiet/face-recognition-project',
      description: 'React app for face recognition'
    }
  ]

  const workExp = [
    {
      title: 'IT Analyst & Web Developer',
      year: 'June 2019 - Present',
      company: 'ESC Automation - Surrey, BC',
      tasks: [
        'Work in the team of 6 providing daily technical supports to over 850 users across Canada & USA',
        'Develop and enhance application features for the existing full stack applications using Node.js and React.js &Vue.js',
        'Migrate AWS instances to local server to achieve the secured user authentication via LDAP',
        'Build a C# .NET app to automate the data migration process from MongoDB to Microsoft SQL Server',
        'Automate 60% to 70% of the Windows & Exchange administration tasks with PowerShell & Python scripting'
      ]
    },
    {
      title: 'Conding Lab Assistant',
      year: 'Jan 2019 - April 2019',
      company: 'Douglas College',
      tasks: [
        'Solved issues and debugged student’s code.',
        'Assisted the instructors in explaining the course concepts regarding HTML, CSS and JavaScript.'
      ]
    }

  ]


  return (
    // <div className="container-fluid">
      <div className='row'>
          
          <div className='content-wrapper'>
            <NavBar />
            <section id='home' data-aos="fade-right">
              
              <IntroDiv />
            </section>
            <section id='projects' data-aos="fade-right">
              <ProjectContainer projects={projects}/>
            </section>
            <section id='work-experience' data-aos="fade-right">
              <AboutMe workExp={ workExp }/>
            </section>
            <section id='contact-me' data-aos="fade-right">
              <Footer />
            </section>
          </div>
      </div>
    // </div>
  );
}

export default App;
