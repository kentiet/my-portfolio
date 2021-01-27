import { React } from "react";
import './nav-bar.styles.scss'

import Logo from '../logo/logo.component'

const NavBar = () => (
  <nav className="db dt-l w-100 border-box pa2 ph5-l">
    <a className="v-mid link dim w-25-l tc tl-l mb2 mb0-l" href="#">
       <Logo />
    </a>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a className="animate__animated animate__fadeInRight nav-link link f6 dib mr4 mr5-l" href="#">&#60; home &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link f6 dib mr4 mr5-l" href="#">&#60; experiences &#62;</a>
      <a className="animate__animated animate__fadeInRight nav-link link f6 dib mr4 mr5-l" href="#">&#60; projects &#62;</a>
    </div>
  </nav>
)
 
export default NavBar