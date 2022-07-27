import { createSlice } from "@reduxjs/toolkit";

const searchModal = createSlice({
    name : "searchModal",
    initialState:false,
    reducers : {
        toggleModal : (state) => !state
    }
})

export const {toggleModal} = searchModal.actions;
export default searchModal.reducer;