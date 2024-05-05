import { createSlice } from "@reduxjs/toolkit";




const initialState = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];




let cartSlice = createSlice({
    initialState,
    name: "cartSlice",
    reducers: {

        addToCart: (state, action) => {
            let productClone = { ...action.payload }
            let findedPro = state.find((product) => product.id === action.payload.id)
            if (findedPro) {
                findedPro.quantity += 1
            } else {
                state.push(productClone)

            }
            localStorage.setItem("cartItems", JSON.stringify(state));

        },

        removeFromCart: (state, action) => {
            const remove = state.filter((product) => product.id !== action.payload.id)
            localStorage.setItem("cartItems", JSON.stringify(remove));

            return remove

        },
        clear: (state, action) => {
            localStorage.removeItem("cartItems");
            return []

        },

        increaseQuantity: (state, action) => {
            let findedPro = state.find((product) => product.id === action.payload.id)
            if (findedPro) {
                findedPro.quantity++
            } else {
                let productClone = { ...action.payload }
                state.push(productClone)

            }
        },
        decreaseQuantity: (state, action) => {
            let findedPro = state.find((product) => product.id === action.payload.id)
            if (findedPro) {
                if (findedPro.quantity > 1) {
                    findedPro.quantity--

                }
            } else {
                let productClone = { ...action.payload }
                state.push(productClone)

            }
        }

    }
})



export let { addToCart, removeFromCart, clear, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer