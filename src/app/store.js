import { configureStore } from '@reduxjs/toolkit';
import identifyMarkersReducer from '../components/Case/IdentifyMarkerSlice';

export default configureStore({
    reducer: {
        identifyMarkers: identifyMarkersReducer
    }
})