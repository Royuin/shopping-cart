import { Outlet, Link, useParams, useLocation} from 'react-router-dom';
import jasmine from '../assets/jasmine-leaves.jpeg';
import '../styles/ProductsDetailsLayout.css';
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

function ProductDetailsLayout({addToCart, productsArray, incrementQuantity, }) {
  const { id } = useParams() 
  const product = productsArray.find(product => product.name === id);
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState(false);



  function handleQuantity(value) {
    if (value < 1 || value > 100) {
      setQuantityError(true);
    }
    setQuantity(false)
    setQuantity(Number(value));
  }

  function decrementQuantity() {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity - 1);
  }

  function incrementQuantity() {
    if (quantity === 100) {
      return;
    }
    setQuantity(Number(quantity) + 1)
  }

  function displayQuantityError() {
    if (quantityError === true) {
    return ( <p className='quantity-error'><em>Quantity must be greater than 0 and no greater than 100.</em></p>)
    }
  }

  useEffect(() => {
    if (quantity >= 1 && quantity <= 100)
    setQuantityError(false);
  },[quantity])

  return (
    <>
      <main className='details-main'>
        <img src={product.src} alt={product.alt}/>
        <div className='details-right'>
          <h2>{id}</h2>
          <h4>Tasting Notes: <span>Buzzword, Buzzword, Buzzword</span></h4>
          <div className='details-wrap'>
            <h4>Details</h4>
            <p>{product.description}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='steeping-wrap'>
            <h4>Steeping Instructions</h4> 
            <p>Heat water to 180{'\u00b0'} use 8 oz water for one teaspoon. Let it steep for 3-5 minutes and enjoy!</p>
          </div>
          <br />
          <p>Price per 3 oz: ${product.price}</p>
          <label htmlFor='quantity' className='quantity-label'> 
          Quantity:
          <div className='quantity-wrapper'>
          <button className='decrement-button' onClick={() => decrementQuantity(product.id, quantity)}>-</button>
            <input type='tel' name='quantity' id='quantity' value={quantity} size={1}
              onChange={(e) => {
                handleQuantity(e.target.value);
              }}/>
              <button className='increment-button' onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
          </label>
              {displayQuantityError()}
          <p><em>Approximately 40 servings</em></p>
          <button disabled={quantityError} onClick={() => {
            addToCart(product, quantity);
          }}>
            Add To Cart - ${product.price}
          </button>
        </div>
      </main>
    </>
  )
}

export default ProductDetailsLayout;
