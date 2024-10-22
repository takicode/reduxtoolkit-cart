import {createSlice} from "@reduxjs/toolkit"

const initialState={
  openModal:false
}


const modalSlice = createSlice({
  name:"modal",
  initialState,
  reducers:{
    modalOpen:(state)=>{
       state.openModal = true
    },
    closeModal:(state)=>{
      state.openModal = false
    }
  }
})

const {actions, reducer} = modalSlice

export const {modalOpen, closeModal} = actions
export default reducer
