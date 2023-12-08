import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    azkarItem: localStorage.getItem("azkarItems") ? JSON.parse(localStorage.getItem("azkarItems")) : [],
    azkarItemCount: 0
}

const azkarSlice = createSlice({
    name: "azkar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.azkarItem.push(action.payload)
            // const itemIndex = state.azkarItem.findIndex((item) => item.content === action.payload.content);

            // if (itemIndex >= 0) {
            //     state.azkarItem[itemIndex].azkarQuantity += 1;
            // }
            // else {
            //     const tempProduct = { ...action.payload, azkarQuantity: 1 };
            //     state.azkarItem.push(tempProduct);
            // }
            localStorage.setItem("azkarItems", JSON.stringify(state.azkarItem));
        },
        increaseAzkarCount: (state) => {
            state.azkarItemCount++;
        },
        descreaseAzkarCount: (state, action) => {
            state.azkarItemCount -= action.payload;
        }
    }
})


export default azkarSlice.reducer
export const { addToCart, increaseAzkarCount, descreaseAzkarCount } = azkarSlice.actions