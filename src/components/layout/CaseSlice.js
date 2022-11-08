import { createSlice } from '@reduxjs/toolkit'

const initialState = {markers:{},image:"",final_conclusion:""};

const CaseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
        updateCaseData: (state, action) => {
            console.log("dispatch",action);
            state.markers = action.payload.markers;
            state.image = action.payload.image;
            state.final_conclusion = action.payload.final_conclusion;

        }
    }
});
export const { updateCaseData } = CaseSlice.actions

export const caseData = (state) => state.case;

export default CaseSlice.reducer