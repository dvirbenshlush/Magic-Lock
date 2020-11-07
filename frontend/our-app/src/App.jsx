import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Pricing from './components/pricing';
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
          <ul> <a href="https://www.facebook.com/magiclockusa" title=""> <img src="img/facebook-img.png" width="50"></img>  </a></ul>
          <ul> <a href="https://waze.com/ul?q={355 W Martin Luther King Jr Blvd, Charlotte, North Carolina}" title=""> <img src="img/instagram-img.png" width="50"></img> </a></ul>
        </SocialMedia2>
        <About data={this.state.landingPageData.About} />
        <Pricing />
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />

        <SocialMedia>
          <a href="tel:7045089300"> <SocialMediaLine> CALL US <span>704-508-9300</span> </SocialMediaLine></a>
        </SocialMedia>

      </div>
    )
  }
}

export default App;

const SocialMediaLine = styled.h1`
color:white;
line-height: 10%;
font-size:24;
`



const SocialMedia = styled.div`
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
text-rendering: optimizeLegibility !important;
-webkit-font-smoothing: antialiased !important;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
box-sizing: border-box;
text-transform: uppercase;
position: fixed;
bottom: 0%;
width: 100%;
height: 10%;
color: white;
font-size: 24px;
font-weight: bold;
text-align: center;
line-height: 90px;
background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
border-top: 0.1px solid #FFF;`

const SocialMedia2 = styled.div`
  position: absolute;
  // top: 80px;
  // left: 16px;
  
  top: 70%;
  left: 0%;
  // font-size: 18px;

`



