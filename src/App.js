import './App.css';
// import IntroDiv from './component/intro-div/intro-div.component'
import LeftBar from '../src/component/left-bar/left-bar.component'
import NavBar from '../src/component/nav-bar/nav-bar.component'

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-3'>
          <LeftBar />
        </div>
        <div className='col-9'>
          <div className='vl'></div>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
