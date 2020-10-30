import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import {


    BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from 'react-router-dom';

   const SERVER_ADDRESS = process.env.NODE_ENV === "development" ? 'http://localhost:5000' : "";


   export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`${SERVER_ADDRESS}/about_us`)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data.data}); 
            console.log(data);
        });
    }   

    render(){
        return(
            <>
                <h1>{this.state.data}</h1>
            </>
        )
    }

}