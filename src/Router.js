import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';

class Navigate extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }



    render() {
        return (

            <HashRouter basename="/">
                <NavBar />
                <Switch>
                    {/* <Route exact path="/home">
                        <LandingPage interaction_list={this.state.data} />
                    </Route> */}
                    {/* <Route path="/interactions">
                        <InteractionsPage interaction_list={this.state.data} />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs interaction_list={this.state.data} />
                    </Route> */}
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </HashRouter>

        );
    }
}
export default Navigate;