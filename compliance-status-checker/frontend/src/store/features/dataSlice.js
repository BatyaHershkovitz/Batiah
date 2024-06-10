import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData } from "../../services/mongoDB-api";

const initialState = {
    dataAverageByMonth: [],
    message: '',
    status: 0
}

export const getAll = createAsyncThunk("getAll", async (thunkApi) => {
    return getAllData()
})

const dataSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            let data = action.payload.data
            state.dataAverageByMonth = data.data.sort((a, b) => a.key - b.key)
            state.message = data.message
            state.status = 1
        }).addCase(getAll.rejected, (state, action) => {
            state.message = 'Sorry, an error occurred while accepting the request'
            state.status = 2
        }).addCase(getAll.pending, (state, action) => {
            state.message = 'loading...'
            state.status = 3
        })
    }
})

export default dataSlice.reducer;