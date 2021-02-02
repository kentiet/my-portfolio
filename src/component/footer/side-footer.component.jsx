import { React } from "react";
import './side-footer.styles.scss'



const SideFooter = () => (
    <div className="footer">
        <div className="profile">
            <span className="github animate__animated animate__fadeInUp"><a href="https://github.com/kentiet" target='_blank' rel="noreferrer">gh</a></span>
            <span className="fb animate__animated animate__fadeInUp"><a href="https://www.facebook.com/ken.tiet/" target='_blank' rel="noreferrer">fb</a></span>
            <span className="linkedin animate__animated animate__fadeInUp"><a href="https://www.linkedin.com/in/kentiet/" target='_blank' rel="noreferrer">in</a></span>
        </div>
    </div>
)

export default SideFooter