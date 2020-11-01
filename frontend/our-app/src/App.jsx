import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
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
      
      <span class="contact">
   <a href="tel:7045089300"> tel </a>
   <a href="https://api.whatsapp.com/send?phone=9549977744"  title=""> whatsapp  </a>
   <a href="https://waze.com/ul?q={355 W Martin Luther King Jr Blvd, Charlotte, North Carolina}" title=""> waze </a>
   </span>
</div>
   )
  }
}

export default App;
