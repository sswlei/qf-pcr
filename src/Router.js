import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter, Redirect } from "react-router-dom";
import NavBar from './components/General/NavBar';
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
import LandingPage from './pages/LandingPage';
import QuizListPage from './pages/Quiz/QuizListPage';
import QuizPage from './pages/Quiz/QuizPage';
import GuidedPracticePage from './pages/GuidedPractice/GuidedPracticePage';
import GuidedPracticeList from './pages/GuidedPractice/GuidedPracticeListPage';
import CompletedPractice from './pages/GuidedPractice/CompletedPracticePage';
import AchievementPage from './pages/AchievementPage';
import PrenatalRadDemo from './components/GuidedPractice/PrenatalRad/PrenatalRad';

import Quiz1Data from './data/Quiz/Quiz1/questions.json';
import PracticeCasePage from './pages/PracticeCase/PracticeCasePage';
import PracticeCaseListPage from './pages/PracticeCase/PracticeCaseListPage';
import EvaluationPage from './pages/PracticeCase/EvaluationPage';
import GeneratorPage from './pages/GeneratorPage';

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
                        <Route exact path="/quiz" component={QuizListPage}>
                        </Route>              
                        <Route exact path={`/quiz/${1}`}>
                            <QuizPage quizData={Quiz1Data}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/introduction" />
                        </Route>
                        <Route exact path="/guidedpractice" component={GuidedPracticeList}>
                        </Route>
                        <Route exact path="/guidedpractice/prenatalrad_complete">
                            <CompletedPractice title={"Prenatal Rapid Aneuploidy Detection"}/>
                        </Route>
                        <Route exact path="/guidedpractice/prenatalrad" render={(routeProps) => 
                            <GuidedPracticePage>
                                <PrenatalRadDemo {...routeProps}></PrenatalRadDemo>
                            </GuidedPracticePage>}>
                        </Route>
                        <Route exact path="/achievements" component={AchievementPage}>
                        </Route>
                        <Route exact path="/practice" component={PracticeCaseListPage}>
                        </Route>
                        <Route exact path="/practice/:caseType/:caseId" component={PracticeCasePage}>
                        </Route>
                        <Route exact path="/practice/:caseType/:caseId/evaluation" component={EvaluationPage}>
                        </Route>
                        <Route exact path="/generator" component={GeneratorPage}>
                        </Route>
                        
                    </Route>
                    


                </Switch>
                {/* <Footer /> */}
            </HashRouter>

        );
    }
}
export default Navigate;