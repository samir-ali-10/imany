import { configureStore } from "@reduxjs/toolkit";
import azkarReducer from "../features/azkar/azkarSlice";

const store = configureStore({
    reducer: {
        azkar: azkarReducer
    }
})

export default store