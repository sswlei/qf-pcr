import { configureStore } from '@reduxjs/toolkit';
import identifyMarkersReducer from '../components/Case/feature/IdentifyMarkerSlice';
import caseReducer from '../components/Case/layout/CaseSlice';
import quizReducer from '../components/Quiz/QuizSlice';

export default configureStore({
    reducer: {
        identifyMarkers: identifyMarkersReducer,
        case: caseReducer,
        quiz: quizReducer
    }
})