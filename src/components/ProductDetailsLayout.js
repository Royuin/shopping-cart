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


function ProductDetailsLayout() {
  const { id } = useParams() 
  let {state} = useLocation();
  const product = state.value

  return (
    <>
      <main className='details-main'>
        <img src={product['src']} alt={product.alt}/>
        <div className='details-right'>
          <h2>{id}</h2>
          <h4>Tasting Notes: <span>Buzzword, Buzzword, Buzzword</span></h4>
          <div classname='details-wrap'>
            <h4>Details</h4>
            <p>{product.description}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='steeping-wrap'>
            <h4>Steeping Instructions</h4> 
            <p>Heat water to 180{'\u00b0'} use 8 oz water for one teaspoon. Let it steep for 3-5 minutes and enjoy!</p>
          </div>
          <br />
          <p>Price per 3 oz: ${product.price}</p>
          <label for='quantity'>
            <input type='number' name='quantity' id='quantity' />
          </label>
          <p><em>Approximatley 40 servings</em></p>
          <button>Add To Cart - ${product.price}</button>
        </div>
      </main>
    </>
  )
}

export default ProductDetailsLayout;