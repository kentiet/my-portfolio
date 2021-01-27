import { React } from "react";
import './side-footer.styles.scss'



const SideFooter = () => (
    <div className="footer">
        <div className="profile">
            <span className="github animate__animated animate__fadeInUp">gh</span>
            <span className="fb animate__animated animate__fadeInUp">fb</span>
            <span className="linkedin animate__animated animate__fadeInUp">in</span>
        </div>
    </div>
)

export default SideFooter