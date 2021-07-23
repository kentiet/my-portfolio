import { React } from "react";
import './nav-bar.styles.scss'

import Logo from '../logo/logo.component'

const NavBar = () => (

  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
    <a className="v-mid link dim w-25-l tc tl-l mb2 mb0-l" href='kentiet.com'>
        <Logo />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">01: About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">02: Experiences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">03: My Works</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  // <nav className="nav-wrapper">

  //   <div className="nav-bar">
  //     <a className="animate__animated animate__fadeInRight nav-link link " href="#home">&#60; home &#62;</a>
  //     <a className="animate__animated animate__fadeInRight nav-link link  " href="#experiences">&#60; experiences &#62;</a>
  //     <a className="animate__animated animate__fadeInRight nav-link link  " href="#projects">&#60; projects &#62;</a>
  //     {/* <div className="get-in-touch-wrapper animate__animated animate__fadeInRight ">
  //       <div className='get-in-touch'>Get in touch</div>
  //     </div> */}
  //   </div>
  // </nav>
)
 
export default NavBar