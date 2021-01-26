import { React } from "react";
import './nav-bar.styles.scss'

const NavBar = () => (
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default NavBar