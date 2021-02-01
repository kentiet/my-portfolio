import { React } from "react";
import './nav-bar.styles.scss'

import Logo from '../logo/logo.component'

const NavBar = () => (
  <nav className="nav-wrapper">
    <a className="v-mid link dim w-25-l tc tl-l mb2 mb0-l" href='kentiet.com'>
       <Logo />
    </a>
    <div className="nav-bar">
      <a className="animate__animated animate__fadeInRight nav-link link " href="#home">&#60; home &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link  " href="#experiences">&#60; experiences &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link  " href="#projects">&#60; projects &#62;</a>
      <div className="get-in-touch-wrapper animate__animated animate__fadeInRight ">
        <div className='get-in-touch'>Get in touch</div>
      </div>
    </div>
  </nav>
)
 
export default NavBar