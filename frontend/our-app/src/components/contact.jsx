import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                </div>
                
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <p>

                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
          {/* {/* </div> */}
        </div> 
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Dvir Benshlush React Land Page Template. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
            </div>
        </div>
          </div>
        </div>
      // </div>
    );
  }
}

export default Contact;
