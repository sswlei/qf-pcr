import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';

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
                    <Route exact path="/introduction">
                        <LandingPage />
                    </Route>
                    {/* <Route path="/interactions">
                        <InteractionsPage interaction_list={this.state.data} />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs interaction_list={this.state.data} />
                    </Route> */}
                    <Route exact path="/">
                        <Redirect to="/introduction" />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </HashRouter>

        );
    }
}
export default Navigate;