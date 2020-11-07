import React, { Component } from 'react'

const SERVER_ADDRESS = process.env.NODE_ENV === "development" ? 'http://localhost:5000' : "";


export class about extends Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`${SERVER_ADDRESS}/about_us`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.data });
        console.log(data);
      });
  }

  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpeg" className="img-responsive" alt="" /> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>

                <p>{this.props.data ? this.state.data : 'loading...'}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-600 col-xs-12">
                    <ul>
                      {/* {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'} */}
                      <span>We in Magic Lock are licensed reliable locksmith company in Charlotte NC.
                      After 5 years in the business we know that we provide the best and fastest locksmith emergency service and non emergency.
                      Our main goal is to make our customers to be satisfied, which is why we have many returning customers that got to know and trust us as their reliable and  efficient local locksmith.
                      We provide a quality and professional locksmith service whether we work on a small job on your car, your house or your place of work.
                      Our company provide the most affordable prices combined with the recent advanced technology solutions available to our customers.<br/></span>
                    <br/><br/>  <span>Our customer service representatives are available for you with any question or concern you may have. Contact us today and we will already start to do our Magic
                      </span>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {/* {this.props.data ? this.props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'} */}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
