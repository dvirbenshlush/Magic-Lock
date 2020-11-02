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
        <About data={this.state.landingPageData.About} />
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />

        <SocialMedia>
          <a href="tel:7045089300"> <img src="img/call_img.jfif" width="50"></img></a>
          <a href="https://api.whatsapp.com/send?phone=9549977744" title=""> <img src="img/facebook_img.png" width="50"></img>  </a>
          <a href="https://waze.com/ul?q={355 W Martin Luther King Jr Blvd, Charlotte, North Carolina}" title=""> <img src="img/instagram_img.jfif" width="50"></img> </a>
        </SocialMedia>
      </div>
    )
  }
}

export default App;

const SocialMedia = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  display: flex;
`
