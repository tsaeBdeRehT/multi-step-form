import React, { Component } from "react";
import Stepper from "../stepper/stepper";
import Form from "../form/form";

import './app.css';

export default class App extends Component {

    render() {
        return(
            <div className='app'>
                <Stepper/>
                <Form />
            </div>
        );
    }
}