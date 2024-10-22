import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems"

const defaultState = {
  cartItems:cartItems,
  amount:230,
  total:0,
  isLoading:true
}

const CartSlice = createSlice({
  name:"cart",
  initialState:defaultState,
  reducers:{
    clearCart:(state)=>{
      state.cartItems = []
    },
    removeItem:(state, action)=>{
      const id = action.payload
      state.cartItems = state.cartItems.filter((item)=>item.id !== id) 
    },
    increaseItem: (state, action)=>{
      const id = action.payload
      const cartItem = state.cartItems.find((item)=>item.id === id)

      cartItem.amount = cartItem.amount + 1
    },
    decreaseItem: (state, action)=>{
      const id = action.payload
      const cartItem = state.cartItems.find((item)=>item.id === id)
      cartItem.amount = cartItem.amount - 1
    },
    getTotalCalculation:(state, action)=>{
      const id = action.payload
      const {price, amount} = state.cartItems.reduce((total, cartItem )=>{
        const {price, amount} = cartItem
           
        total.price += amount * price
        total.amount += amount
        return total
      },
      {
      price :0,
      amount : 0
    }
  )
  state.total = parseInt(price).toFixed(2)
  state.amount = amount
      
      
    }
    
  }
})

const {actions, reducer} = CartSlice
export const {clearCart, removeItem, increaseItem, decreaseItem, getTotalCalculation} = actions 
export default reducer