import { React } from "react";
import './nav-bar.styles.scss'

import Logo from '../logo/logo.component'

const NavBar = () => (

  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="v-mid link dim w-25-l tc tl-l mb2 mb0-l" href='kentiet.com'>
        <Logo />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">01: Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">02: My Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work-experience">03: About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-me">04: Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
 
export default NavBar