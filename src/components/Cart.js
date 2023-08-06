import '../styles/Cart.css';
import jasmine from '../assets/jasmine-leaves.jpeg';
import chamomile from '../assets/chamomile-leaves.jpg';
import black from '../assets/black-tea-leaves.jpg';
import ceylon from '../assets/ceylon-tea.jpg';
import rooibos from '../assets/rooibos-tea.jpg';
import mallow from '../assets/mallow-flowers.jpg';
import xianzhi from '../assets/xianzhi-green.jpg';
import reverieGreenBlend from '../assets/reverie-green-blend.jpg';
import matchaCooking from '../assets/matcha-cooking-powder.jpg';
import matchaCeremonial from '../assets/matcha-ceremonial-powder.jpg';
import { useEffect, useState } from 'react';

function Cart({cart, handleQuantityChange, decrementQuantity, incrementQuantity, removeFromCart, clearCart}) {

  const [checkoutMessage, setCheckoutMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCheckoutMessage(false)
    }, 3000)
  },[checkoutMessage])

  function cartSubtotal() {
    const subtotal = cart.reduce((total, currentProduct) => {
      return total + currentProduct.quantity * currentProduct.price;
    },0)
    return (<p>${subtotal.toFixed(2)}</p>)
  }

  function displayCheckoutMessage() {
    if (checkoutMessage === true) {
      return <p>Checkout Successful!</p>
    }
  }

  function renderProducts() {
    const cartItems = cart.map((product) => {
      return (
        <li key={product.id} className='cart-product'>
          <div className='cart-product-wrap'>
            <img className='cart-img' src={product.src} alt={product.alt} />
            <h3>{product.name}</h3>
          </div>
          <p>${product.price}</p>
          <div className='product-quantity-wrap'>
            <button className='decrement-button' onClick={() => decrementQuantity(product.id, product.quantity)} >-</button>
            <input className='quantity-input' type='tel' value={product.quantity} onChange={(e) => {
              handleQuantityChange(e, product.id) 
            }}
            ></input>
            <button className='increment-button' onClick={() => incrementQuantity(product.id)} >+</button>
          </div>
          <div className='remove-and-total'>
            <p>${Math.round((product.quantity * product.price) * 100) / 100}</p>
            <button className='remove-from-cart' onClick={() => removeFromCart(product.id)}>X</button>
          </div>
        </li>
      );
    });

    return <ul className='cart-list'>{cartItems}</ul>;
  }

  if (cart.length < 1) {
    return (
      <>
      <h2 className='empty-cart-heading'>Your cart is empty!</h2>
      {displayCheckoutMessage()}
      </>
    )
  }

  else {
    return (
      <main>
        <header className='cart-header'>
          <p><strong>Item</strong></p> 
          <p><strong>Price</strong></p> 
          <p><strong>Quantity</strong></p> 
          <p><strong>Total</strong></p>
        </header>
        {renderProducts()}
        <section className='subtotal-section'>
          <div className='subtotal-wrapper'>
          <h4>Subtotal:</h4>
          {cartSubtotal()}
          </div>
          <p><em>Shipping and taxes computed at checkout</em></p>
          <button className='checkout-button' onClick={() => [clearCart(), setCheckoutMessage(true)]}>Checkout</button>
        </section>
      </main>
    )
  }
}

export default Cart;
