import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./feature/Cart/CartSlice"
import modalReducer from "./feature/modal/ModalSlice"
 
const Store = configureStore({
  reducer:{
    cart: cartReducer,
    modal:modalReducer
  }
})

export default Store


