import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "../common/Header/Header";

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = "http://localhost:8080/api";
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Header {...props} baseUrl={this.baseUrl}
                                                                     showSearchArea={true}/>}/>
                </div>
            </Router>
        )
    }
}

export default Controller;
