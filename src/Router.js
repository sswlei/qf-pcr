import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
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
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>

                    <Route>
                        <NavBar />

                        <Route exact path="/introduction">
                            <IntroductionPage />
                        </Route>
                       <Route path="/background">
                            <BackgroundPage  />
                        </Route>
                            {/*  <Route path="/contact-us">
                            <ContactUs interaction_list={this.state.data} />
                            </Route> */}
                        <Route exact path="/">
                            <Redirect to="/introduction" />
                        </Route>
                    </Route>


                </Switch>
                {/* <Footer /> */}
            </HashRouter>

        );
    }
}
export default Navigate;