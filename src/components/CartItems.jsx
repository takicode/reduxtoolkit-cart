import React from 'react'
import {ChevronDown, ChevronUp} from "../icons"
import { decreaseItem, increaseItem, removeItem } from '../feature/Cart/CartSlice'
import { useDispatch } from 'react-redux'

const CartItems = ({id, title, price, img, amount}) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button className='remove-btn' onClick={()=>dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={()=>dispatch(increaseItem(id))}><ChevronUp/></button>
        <p className="amount">{amount}</p>
        <button className='amount-btn' onClick={()=>{
          if(amount === 1){
            return dispatch(removeItem(id))
            
          }
          dispatch(decreaseItem(id))}}><ChevronDown/></button>
      </div>
    </article>
  )
}

export default CartItems 