import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import About from './about';
import Pricing from './pricing';
import Gallery from './gallery';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData: {},
  }
  getResumeData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (

      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header} />
        <Pricing data={this.state.resumeData.Pricing} />
        <About data={this.state.resumeData.About} />
        <Gallery />
        <Contact data={this.state.resumeData.Contact} />

        {/* <div class="boxfloatbottom">
        <a href="tel:7045089300" style="float:left;margin-left: 20px;" title="">    </a>
        <a href="https://api.whatsapp.com/send?phone=9549977744" style="float:left;margin-left: 20px;" title="">            <p style="display: inline-block;border-radius: 60px;box-shadow: 3px 3px 5px #888;color: #fff;background-color: #49da67;width: 70px;height: 70px;border: 2px solid #fff;font-size: 35px;padding: 0 20px;">                <i class="icon ion-social-whatsapp" style="color:#fff;"></i>            </p>        </a>
        <a href="https://waze.com/ul?q={355 W Martin Luther King Jr Blvd, Charlotte, North Carolina}" style="float:left;margin-left: 20px;" title="">            <p style="display: inline-block;border-radius: 60px;box-shadow: 3px 3px 5px #888;color: #fff;background-color: #41d5ff;width: 70px;height: 70px;border: 2px solid #fff;font-size: 35px;padding: 0 20px;">                <i class="icon ion-android-pin" style="color:#fff;"></i>            </p>        </a>
    </div> */}
      </div>
    
    )
  }
}

export default App
