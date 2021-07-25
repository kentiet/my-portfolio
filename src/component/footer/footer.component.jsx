import { React } from "react";
import './footer.styles.scss'



const Footer = () => (
  <div className="footer-wrapper row">
    <div className="col-xs-12">
      <div className="top-corner">
        <p>#04: Contact Me</p>
        <hr className="top-corner-underline" data-aos="fade-left" />
      </div>
      <div className="container-fluid">
        <div className="footer-body row">
          <div className="col-md-10 col-md-offset-1">
            <form action="" className="reveal-content">
              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-default">
                    Send
                  </button>
                </div>
                <div className="col-md-5 address-container">
                  <ul className="list-unstyled">
                    <li>
                      <span className="fa-icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      ken.tietkien@gmail.com
                    </li>
                  </ul>
                  <div className="social-wrapper">
                    <a href="http://www.facebook.com" title="" className="fa-icon">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="http://www.twitter.com" title="" className="fa-icon">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer