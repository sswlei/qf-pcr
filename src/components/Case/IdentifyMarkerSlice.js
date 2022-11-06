import { createSlice } from '@reduxjs/toolkit'

const initialState = {answers:{}};

const IdentifyMarkersSlice = createSlice({
  name: 'identifyMarkers',
  initialState,
  reducers: {
        initAnswers: (state, action) => {
            state.answers = action.payload;
        },
        updateAnswer: (state, action) => {
            // Payload Items
            // markerId: ID of the marker
            // questionId: ID of the question
            // answer: answer selected by user
            console.log(action);
            state.answers[action.payload.markerId][action.payload.questionId] = action.payload.answer;
        }
    }
});
export const { updateAnswer, initAnswers } = IdentifyMarkersSlice.actions

export const userAnswers = (state) => state.identifyMarkers.answers;

export default IdentifyMarkersSlice.reducer