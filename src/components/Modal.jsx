import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../feature/Cart/CartSlice'
import { closeModal } from '../feature/modal/ModalSlice'


const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className="modal">
        <h4>Remove all items from your shopping cart</h4>
        <div className="btn-container" >
          <button type='button' className='btn confirm-btn'onClick={()=>{
            dispatch(closeModal())
            dispatch(clearCart())}}>confirm</button>
          <button type='button' className='btn clear-btn' onClick={()=>dispatch(closeModal())}>cancel</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal