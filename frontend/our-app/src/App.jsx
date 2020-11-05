import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';
import JsonData from './data/data.json';
import styled from 'styled-components'

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />

        <SocialMedia2>
          <a href="https://www.facebook.com/magiclockusa" title=""> <img src="img/facebook-img.png"  width="50"></img>  </a>
          <a href="https://waze.com/ul?q={355 W Martin Luther King Jr Blvd, Charlotte, North Carolina}" title=""> <img src="img/instagram-img.png" width="50"></img> </a>
        </SocialMedia2>
                <About data={this.state.landingPageData.About} />
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />

        <SocialMedia>
          <a href="tel:7045089300"> <img src="img/call-img.png" width="50"></img></a>
          </SocialMedia>
          
      </div>
    )
  }
}

export default App;

const SocialMedia = styled.div`
  position: fixed;
  bottom: 0;
  margin-left: 45%;
  border-radius: 50%;

`

const SocialMedia2 = styled.div`
  position: absolute;
  // top: 80px;
  // left: 16px;
  top: 16%;
  left: 0%;
  // font-size: 18px;

`



