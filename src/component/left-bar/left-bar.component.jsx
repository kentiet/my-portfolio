import { React } from "react";
import './left-bar.styles.scss'

import SideFooter from '../footer/side-footer.component'
import Logo from '../logo/logo.component'


const LeftBar = () => (
    <div className="left-bar-container">
        <Logo />
        <SideFooter />
    </div>
) 

export default LeftBar;