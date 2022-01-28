import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import Quiz1 from './pages/Quiz/Quiz1';
import GuidedPractice from './pages/GuidedPractice';
import PrenatalRadPractice from './pages/GuidedPractice/PrenatalRadPractice';
import CompletedPractice from './pages/GuidedPractice/CompletedPractice';
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
                            <BackgroundPage />
                        </Route>          
                        <Route path="/quiz" component={QuizPage}>
                        </Route>              
                        <Route exact path={`/quiz${1}`}>
                            <Quiz1 />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/introduction" />
                        </Route>
                        <Route exact path="/practice" component={GuidedPractice}>
                        </Route>
                        <Route exact path="/practice/prenatalrad_complete">
                            <CompletedPractice />
                        </Route>
                        <Route exact path="/practice/prenatalrad" component={PrenatalRadPractice}>
                        </Route>
                    </Route>


                </Switch>
                {/* <Footer /> */}
            </HashRouter>

        );
    }
}
export default Navigate;