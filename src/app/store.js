import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import identifyMarkersReducer from '../components/Case/feature/IdentifyMarkerSlice';
import caseReducer from '../components/Case/layout/CaseSlice';
import quizReducer from '../components/Quiz/QuizSlice';
import { listenerMiddleware } from './middleware';

export default configureStore({
    reducer: {
        identifyMarkers: identifyMarkersReducer,
        case: caseReducer,
        quiz: quizReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})