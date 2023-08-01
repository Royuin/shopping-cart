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

function Cart({cart, handleQuantityChange, decrementQuantity, incrementQuantity}) {

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
        </li>
      );
    });

    return <ul className='cart-list'>{cartItems}</ul>;
  }

  if (cart.length < 1) {
    return ( <h2 className='empty-cart-heading'>Your cart is empty!</h2> )
  }

  else {
    return (
      <>
        <header className='cart-header'>
          <p><strong>Item</strong></p> 
          <p><strong>Price</strong></p> 
          <p><strong>Quantity</strong></p> 
        </header>
        {renderProducts()}
      </>
    )
  }
}

export default Cart;
