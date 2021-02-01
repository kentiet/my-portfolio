import { React } from "react";
import './nav-bar.styles.scss'

import Logo from '../logo/logo.component'

const NavBar = () => (
  <nav className="db dt-l pa2 ph5-l">
    <a className="v-mid link dim w-25-l tc tl-l mb2 mb0-l" href='kentiet.com'>
       <Logo />
    </a>
    <div className="db dtc-l v-mid w-100 tc tr-l nav-bar">
      <a className="animate__animated animate__fadeInRight nav-link link f5 dib mr4 mr5-l" href="#home">&#60; home &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link f5 dib mr4 mr5-l" href="#experiences">&#60; experiences &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link f5 dib mr4 mr5-l" href="#projects">&#60; projects &#62;</a>
      <div className="get-in-touch-wrapper animate__animated animate__fadeInRight f5 dib">
        <div className='get-in-touch'>Get in touch</div>
      </div>
    </div>
  </nav>
)
 
export default NavBar