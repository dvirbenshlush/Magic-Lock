import React, { Component } from 'react'



export class pricing extends Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

 

  render() {
    return (
      <div id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> </div>
            <div className="col-xs-12 col-md-6">
              <div className="services">
                <h2>Pricing</h2>

                <div className="list-style">
                  <div className="col-lg-6 col-sm-600 col-xs-12">
                    <ul>
                      
                      </ul>
Service we provide: <br/>
* Car Lockout <br/>
* Car Key Replacement <br/>
* Car Key Program <br/>
* Ignition Replacement <br/>
* House Lockout <br/>
* Office Lockout <br/>
* Business Lockout <br/>
* Lock Rekey <br/>
* Lock Installation <br/> 
* Lock Change <br/>
* Safe Lockout<br/>
                    <br/>
                  
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

export default pricing