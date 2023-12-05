import { configureStore } from "@reduxjs/toolkit";
import azkarReducer from "../features/azkar/azkarSlice";
import fetchAzkarReducer from "../features/fetchAzkar/fetchAzkarSlice"

const store = configureStore({
    reducer: {
        azkar: azkarReducer,
        fetchAzkar: fetchAzkarReducer
    }
})

export default store