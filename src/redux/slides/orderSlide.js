import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [],
    isCartOpen: false,
}

export const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderProduct: (state, action) => {
            const { orderItem } = action.payload
            const itemOrder = state.orderItems.find((item) => item.product === orderItem.product)
            if (itemOrder) {
                itemOrder.amount += itemOrder.amount
            } else {
                state.orderItems.push(orderItem)
            }
            state.isCartOpen = true;
        },
        removeOrderProduct: (state, action) => {
            const { idProduct } = action.payload
            state.orderItems = state.orderItems.filter((item) => item.product !== idProduct)
        },
        toggleCart: (state, action) => {
            state.isCartOpen = action.payload;
        }
    },
})

export const { addOrderProduct, removeOrderProduct, toggleCart } = orderSlide.actions

export default orderSlide.reducer