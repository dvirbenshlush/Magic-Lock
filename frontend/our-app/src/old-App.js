import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import About from './components/About.components';
import Services from './components/Services.components';
import Home from './components/Home.components';
import Gallery from './components/Gallery.components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { render } from 'react-dom';
// import React from 'react';

// const SERVER_ADDRESS = process.env.NODE_ENV === "development" ? 'http://localhost:5000' : "";


function App() {
    const Home = 'Home is good';
    // const About = 'We are a company for breaking locks';
    const Prices = 'Prices';
    return (

            <
            div className = "App" >
            <
            nav >
            <
            ul >
            <
            li > < img src = "https://citylocal101.com/storage/company/1695/logo/c57015edd1349ef4107a745b9831a6a0.png"
            className = "App-logo"
            alt = "logo" / > < /li> <
            li > < a href = "#section1" > Home < /a></li >
            <
            li > < a href = "#section2" > Gallery < /a></li >
            <
            li > < a href = "#section3" > About < /a></li >
            <
            li > < a href = "#section4" > Prices < /a></li >
            <
            li > < a href = "#section5" > Services < /a></li >
            <
            /ul> < /
            nav >

            <
            br / > < br / >
            <
            br / > < br / >

            <
            div id = "section1" >
            <
            h1 > { Home } < /h1> < /
            div >

            <
            div id = "section2" > { < Gallery > < /Gallery>}  < /
                div > <
                div id = "section3" > { < About > < /About>}  < /
                    div > <
                    div id = "section4" >
                    <
                    h1 > { Prices } < /h1> < /
                    div >

                    <
                    div id = "section5" > { < Services > < /Services>}  < /
                        div >

                        <
                        /div>

                    );
                }

                export default App;