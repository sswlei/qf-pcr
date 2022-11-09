import React from 'react';
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BackgroundPage from './pages/BackgroundPage';
import IntroductionPage from './pages/IntroductionPage';
import LandingPage from './pages/LandingPage';
import GuidedPracticeList from './pages/GuidedPractice/GuidedPracticeListPage';
import CompletedPractice from './pages/GuidedPractice/CompletedPracticePage';
import PracticeCaseListPage from './pages/PracticeCase/PracticeCaseListPage';
import EvaluationPage from './pages/PracticeCase/EvaluationPage';
import MainLayout from './components/layout/MainLayout';
import CaseLayout from './components/Case/layout/CaseLayout';
import ReviewPeaks from './components/Case/feature/ReviewPeaks';
import IdentifyMarkers from './components/Case/feature/IdentifyMarkers';
import FinalConclusion from './components/Case/feature/FinalConclusion';
import QuizPage from './pages/Quiz/QuizPage';
import QuizListPage from './pages/Quiz/QuizListPage';

const AppRouter = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <LandingPage/> }></Route>
            <Route element={<MainLayout/>}>
                <Route index path="introduction" element={<IntroductionPage />}></Route>
                <Route path="background" element={<Navigate to="what-is-pcr" replace />}/>    
                <Route path="background/:category" element={<BackgroundPage />}/>
                <Route path="guidedpractice" element={<GuidedPracticeList/>}/>
                <Route path="practice" element={<PracticeCaseListPage/>}/>
                <Route path=":category/:caseId" element={<CaseLayout title="Guided Practice" />}>
                    <Route path="" element={<Navigate to="intro" replace />}/>    
                    <Route path='intro' element={<ReviewPeaks/>}/>
                    <Route path='identify-markers' element={<IdentifyMarkers/>}/>
                    <Route path='final-conclusion' element={<FinalConclusion/>}/>

                </Route>
            </Route>
            <Route path="/quiz" element={<QuizListPage/>}></Route>    
            <Route path={`quiz/:quizId`} element={<QuizPage />}/>
        </Routes>
    </BrowserRouter>
    );
}



export default AppRouter;