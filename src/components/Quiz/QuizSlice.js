import { createSlice } from '@reduxjs/toolkit'

const initialState = {mcq_questions:[],tf_questions:[]};

const QuizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
        updateQuizData: (state, action) => {
            state.mcq_questions = action.payload.mcq_questions;
            state.tf_questions = action.payload.tf_questions;

        }
    }
});
export const { updateQuizData } = QuizSlice.actions

export const quizData = (state) =>{
    return {...state.mcq_questions,...state.tf_questions}
}

export default QuizSlice.reducer