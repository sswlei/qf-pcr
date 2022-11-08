import { configureStore } from '@reduxjs/toolkit';
import identifyMarkersReducer from '../components/Case/IdentifyMarkerSlice';
import caseReducer from '../components/layout/CaseSlice';
export default configureStore({
    reducer: {
        identifyMarkers: identifyMarkersReducer,
        case: caseReducer
    }
})