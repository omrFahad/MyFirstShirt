import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

let initialState = {
    pData: [],
    productData: products

}


let productSlice = createSlice({
    initialState,
    name: "productSlice",
    reducers: {},

})


export let { } = productSlice.actions

export default productSlice.reducer