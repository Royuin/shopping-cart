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

function Cart({cart, handleQuantityChange} ) {

  function renderProducts() {
    const cartItems = cart.map((product) => {
      return (
        <li key={product.id} className='cart-product'>
          <div className='cart-product-wrap'>
            <img className='cart-img' src={product.src} alt={product.alt} />
            <h3>{product.name}</h3>
          </div>
          <p>${product.price}</p>
          <p>{product.quantity}</p>
        </li>
      );
    });

    return <ul className='cart-list'>{cartItems}</ul>;
  }

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

export default Cart;
