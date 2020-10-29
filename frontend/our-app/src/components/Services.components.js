import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import {


    BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from 'react-router-dom';

   const SERVER_ADDRESS = process.env.NODE_ENV === "development" ? 'http://localhost:5000' : "";


   export default class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`${SERVER_ADDRESS}/services_list_for_price_guide`)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data.data}); 
            console.log(data);
        }).catch('error');
    }   

    render(){
        return(
            <>
                <h1>{this.state.data}</h1>
            </>
        )
    }
}