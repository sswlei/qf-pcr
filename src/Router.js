import React, { useRef } from 'react';
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/General/NavBar';
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
import LandingPage from './pages/LandingPage';
import QuizListPage from './pages/Quiz/QuizListPage';
import QuizPage from './pages/Quiz/QuizPage';
import GuidedPracticeList from './pages/GuidedPractice/GuidedPracticeListPage';
import CompletedPractice from './pages/GuidedPractice/CompletedPracticePage';
import AchievementPage from './pages/AchievementPage';
import Main from './components/GuidedPractice/Base/Main';

import Quiz1Data from './data/Quiz/Quiz1/questions.json';
import CasePage from './pages/CasePage';
import PracticeCaseListPage from './pages/PracticeCase/PracticeCaseListPage';
import EvaluationPage from './pages/PracticeCase/EvaluationPage';
import FinalAssessmentIntro from './pages/FinalAssessment/IntroPage';
import FinalAssessmentComplete from './pages/FinalAssessment/CompletedFinalPage';
import MaxAttemptsPage from './pages/MaxAttemptsPage';
import BackgroundTab from './components/Background/BackgroundTab';

const AppRouter = () => {
    
    return (

    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index path="/" element={ <LandingPage/> }></Route>
            <Route index exact path="introduction" element={<IntroductionPage />}></Route>
            <Route path="background" element={<Navigate to="what-is-pcr" replace />}/>    
            <Route path="background/:category" element={<BackgroundPage />}>
                {/* <Route path="what-is-pcr" element={<BackgroundTab></BackgroundTab>}></Route>
                <Route path="pcr-overview" element={<BackgroundTab></BackgroundTab>}></Route>
                <Route path="what-is-aneuploidy" element={<BackgroundTab></BackgroundTab>}></Route>
                <Route path="why-test-aneuploidy" element={<BackgroundTab></BackgroundTab>}></Route>
                <Route path="prenatal-pcr" element={<BackgroundTab></BackgroundTab>}></Route>
                <Route path="pcr-pregnancy-loss" element={<BackgroundTab></BackgroundTab>}></Route>
 */}
            </Route>          
                        {/* <Route exact path="/quiz" component={QuizListPage}>
                        </Route>              
                        <Route exact path={`/quiz/${1}`}>
                            <QuizPage quizData={Quiz1Data}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/introduction" />
                        </Route>
                        <Route exact path="/guidedpractice" component={GuidedPracticeList}>
                        </Route>
                        <Route exact path="/guidedpractice/complete/prenatalrad">
                            <CompletedPractice title={"Prenatal Rapid Aneuploidy Detection"}/>
                        </Route>
                        <Route exact path="/guidedpractice/complete/pregnancyloss">
                            <CompletedPractice title={"Pregnancy Loss"}/>
                        </Route>
                        <Route exact path="/guidedpractice/:caseType" render={(routeProps) => 
                            <CasePage title={`Guided Practice`}>
                                <Main category={"guidedpractice"}  {...routeProps}></Main>
                            </CasePage>}>
                        </Route>


                        <Route exact path="/achievements" component={AchievementPage}>
                        </Route>
                        <Route exact path="/practice" component={PracticeCaseListPage}>
                        </Route>
                        <Route exact path="/practice/:caseType/:caseId" render={(routeProps) => 
                            <CasePage title={`Practice Case #${routeProps.match.params.caseId}`}>
                                <Main category={"practice"}  {...routeProps}></Main>
                            </CasePage>}>
                        </Route>
                        <Route exact path="/:category/:caseType/:caseId/evaluation" component={EvaluationPage}>
                        </Route>
                        <Route exact path="/final_assessment" component={FinalAssessmentIntro}>
                        </Route>
                        <Route exact path="/final_assessment/:caseType/:caseId" render={(routeProps) => 
                            <CasePage title={`Final Assessment`}>
                                <Main category={"final_assessment"} {...routeProps}></Main>
                            </CasePage>}>
                        </Route>
                        <Route exact path="/final_assessment/complete" component={FinalAssessmentComplete}>
                        </Route>
                        <Route exact path="/:category/:caseType/:caseId/max_attempts" component={MaxAttemptsPage}>
                        </Route> */}

            {/* <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
                </Route>
            </Route> */}
        </Routes>
    </BrowserRouter>
    );
}



export default AppRouter;