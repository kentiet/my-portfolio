import { React } from "react";
import './footer.styles.scss'



const Footer = () => (
  <div class="footer-wrapper row">
    <div class="col-xs-12">
      <div className="top-corner">
        <p>#04: Contact Me</p>
        <hr className="top-corner-underline" data-aos="fade-left" />
      </div>
      <div className="container-fluid">
        <div class="footer-body row">
          <div class="col-md-10 col-md-offset-1">
            <form action="" class="reveal-content">
              <div class="row">
                <div class="col-md-7">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-default">
                    Send
                  </button>
                </div>
                <div class="col-md-5 address-container">
                  <ul class="list-unstyled">
                    <li>
                      <span class="fa-icon">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      ken.tietkien@gmail.com
                    </li>
                  </ul>
                  <div className="social-wrapper">
                    <a href="http://www.facebook.com" title="" class="fa-icon">
                      <i class="fa fa-github"></i>
                    </a>
                    <a href="http://www.twitter.com" title="" class="fa-icon">
                      <i class="fa fa-linkedin"></i>
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