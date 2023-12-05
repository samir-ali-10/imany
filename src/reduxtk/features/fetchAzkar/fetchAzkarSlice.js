import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    azkarItems: [],
    error: ""
}

export const fetchAzkar = createAsyncThunk("fetchingAzkar/fetchAzkar", () => {
    return axios.get("https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/adkar.json").then((response) => response.data)
})


const fetchAzkarSlice = createSlice({
    name: "fetchingAzkar",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAzkar.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchAzkar.fulfilled, (state, action) => {
            state.loading = false;
            state.azkarItems = action.payload;
            state.error = ''
        })
        builder.addCase(fetchAzkar.rejected, (state, action) => {
            state.loading = false;
            state.azkarItems = [];
            state.error = action.error.message
        })
    }
})

export default fetchAzkarSlice.reducer