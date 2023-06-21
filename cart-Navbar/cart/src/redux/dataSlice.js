import { createSlice } from "@reduxjs/toolkit"

const state = {
    value:[]
}

const dataSlice = createSlice({
    name:"Database",
    initialState: state,
    reducers: {
        addData : (state,actions) => {
            state.value = [...actions.payload]
        }
    }
})

export const { addData } = dataSlice.actions;
export default dataSlice.reducer