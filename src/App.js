import './App.css';
import IntroDiv from './component/intro-div/intro-div.component'
import LeftBar from '../src/component/left-bar/left-bar.component'
import NavBar from '../src/component/nav-bar/nav-bar.component'

function App() {
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

            </section>
            <section id='projects'>

            </section>
          </div>
      </div>
    </div>
  );
}

export default App;
