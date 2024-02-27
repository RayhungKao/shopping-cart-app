import { configureStore } from '@reduxjs/toolkit'
import shoppingcartReducer from './slices/shoppingcartSlice'

export default configureStore({
    reducer: {
        shoppingcart: shoppingcartReducer,
    }
})


