import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems';
import { clearCart, getTotalCalculation } from '../feature/Cart/CartSlice'
import { modalOpen } from '../feature/modal/ModalSlice';

const CartContainer = () => {
  const {cartItems, total, amount} = useSelector((store)=>store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch((getTotalCalculation()))
  },[cartItems])

  if(amount < 1){
    return (
    <section className='cart'>
      <header>
        <h2>YOUR BAG</h2>
        <h4 className="empty-cart">Cart is currently empty</h4>
      </header>
    </section>
    )
  }
  
  return (
    <section className='cart'>
      <header>
        <h2>YOUR BAG</h2>
      </header>
      <div>
        {cartItems.map((items)=>{
          return (
            <CartItems key={items.id} {...items}/>
          )
        })}
      </div>
      <footer>
        <hr/>
        <div className="cart-total">
          <h4>total <span>${total}</span></h4>
        </div>
        <button className='btn clear-btn' onClick={()=>dispatch(modalOpen())
        }>clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer