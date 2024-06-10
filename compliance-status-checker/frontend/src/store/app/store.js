import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../features/dataSlice";

export const myStore = configureStore({
    reducer: {
        dataSlice
    }
})
