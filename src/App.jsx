import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import uniqid from 'uniqid';
import logoOutline from './assets/logo-with-outline.png';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Products from './components/Products';
import Matcha from './components/Matcha';
import ProductsLayout from './ProductsLayout';
import ProductDetailsLayout from './components/ProductDetailsLayout';
import GreenTea from './components/GreenTea';
import HerbalTea from './components/Herbal';
import jasmine from './assets/jasmine-leaves.jpeg';
import chamomile from './assets/chamomile-leaves.jpg';
import black from './assets/black-tea-leaves.jpg';
import ceylon from './assets/ceylon-tea.jpg';
import rooibos from './assets/rooibos-tea.jpg';
import mallow from './assets/mallow-flowers.jpg';
import xianzhi from './assets/xianzhi-green.jpg';
import reverieGreenBlend from './assets/reverie-green-blend.jpg';
import matchaCooking from './assets/matcha-cooking-powder.jpg';
import matchaCeremonial from './assets/matcha-ceremonial-powder.jpg';
import BlackTea from './components/Black';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [productsArray, setProductsArray] = useState([
    {
      name: 'Green Jasmine',
      src: jasmine,
      alt: 'dried green jasmine tea leaves',
      type: 'green',
      description:
        'This is where a description would go if you had one and a real product',
      price: 15.65,
      id: uniqid(),
    },
    {
      name: 'Chamomile',
      src: chamomile,
      alt: 'dried chamomile flowsers',
      type: 'herbal',
      description:
        'This is where a description would go if you had one and a real product',
      price: 12.39,
      id: uniqid(),
    },
    {
      name: 'Russian Caravan Black',
      src: black,
      alt: 'dried black tea leaves',
      type: 'black',
      description:
        'This is where a description would go if you had one and a real product',
      price: 13.72,
      id: uniqid(),
    },
    {
      name: 'Ceylon Green',
      src: ceylon,
      alt: 'dried dark green tea leaves',
      type: 'green',
      description:
        'This is where a description would go if you had one and a real product',
      price: 17.24,
      id: uniqid(),
    },
    {
      name: 'Rooibos',
      src: rooibos,
      alt: 'Dried red and orange tea leaves with bits of green',
      type: 'herbal',
      description:
        'This is where a description would go if you had one and a real product',
      price: 17.73,
      id: uniqid(),
    },
    {
      name: 'Mallow',
      src: mallow,
      alt: 'Dried purple flowers with green stems',
      type: 'herbal',
      description:
        'This is where a description would go if you had one and a real product',
      price: 10.79,
      id: uniqid(),
    },
    {
      name: 'Xianzhi Green',
      src: xianzhi,
      alt: 'Long dried jade green leaves',
      type: 'green',
      description:
        'This is where a description would go if you had one and a real product',
      price: 21.97,
      id: uniqid(),
    },
    {
      name: 'Reverie Green Blend',
      src: reverieGreenBlend,
      alt: 'Dried green leaves with bits of blue',
      type: 'green',
      description:
        'This is where a description would go if you had one and a real product',
      price: 18.14,
      id: uniqid(),
    },
    {
      name: 'Matcha Cooking Grade',
      src: matchaCooking,
      alt: 'Dull green powder',
      type: 'matcha',
      description:
        'This is where a description would go if you had one and a real product',
      price: 23.28,
      id: uniqid(),
    },
    {
      name: 'Matcha Ceremonial Grade',
      src: matchaCeremonial,
      alt: 'Bright green powder',
      type: 'matcha',
      description:
        'This is where a description would go if you had one and a real product',
      price: 29.59,
      id: uniqid(),
    },
  ]);

  function productInCart(product) {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === product.id) {
        return true;
      }
    }
  }

  function removeFromCart(id) {
    if (cart.length === 1) {
      return setCart([]);
    } else if (cart.length > 1) {
      const updatedCart = cart.filter(
        (currentProduct) => currentProduct.id !== id
      );
      return setCart(updatedCart);
    }
  }

  function clearCart() {
    setCart([]);
  }

  function addToCart(product, quantity) {
    const quantityNum = Number(quantity);

    if (productInCart(product)) {
      const updatedCart = cart.map((currentProduct) => {
        if (currentProduct.id === product.id) {
          currentProduct.quantity = currentProduct.quantity + quantityNum;
          return currentProduct;
        } else {
          return currentProduct;
        }
      });
      return setCart(updatedCart);
    } else {
      product.quantity = quantityNum;
      setCart((previous) => [...previous, product]);
    }
  }

  function decrementQuantity(id, quantity) {
    if (quantity - 1 < 1) {
      return removeFromCart(id);
    } else {
      const updatedCart = cart.map((currentProduct) => {
        if (currentProduct.id === id) {
          currentProduct.quantity = currentProduct.quantity - 1;
        }
        return currentProduct;
      });
      setCart(updatedCart);
    }
  }

  function incrementQuantity(id) {
    const updatedCart = cart.map((currentProduct) => {
      if (currentProduct.id === id) {
        currentProduct.quantity = currentProduct.quantity + 1;
        return currentProduct;
      } else {
        return currentProduct;
      }
    });
    return setCart(updatedCart);
  }

  function handleQuantityChange(event, id) {
    const quantity = event.target.value;
    const updatedCart = cart.map((currentProduct) => {
      if (id === currentProduct.id) {
        currentProduct.quantity = quantity;
        return currentProduct;
      } else {
        return currentProduct;
      }
    });
    return setCart(updatedCart);
  }

  return (
    <div className='App'>
      <Navbar cartLength={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsLayout />}>
          <Route
            index
            element={<Products productsArray={productsArray} cart={cart} />}
          />
          <Route
            path='matcha'
            element={<Matcha productsArray={productsArray} />}
          />
          <Route
            path='green-tea'
            element={<GreenTea productsArray={productsArray} />}
          />
          <Route
            path='herbal-tea'
            element={<HerbalTea productsArray={productsArray} />}
          />
          <Route
            path='black-tea'
            element={<BlackTea productsArray={productsArray} />}
          />
        </Route>
        <Route
          path='/product/:id'
          element={
            <ProductDetailsLayout
              addToCart={addToCart}
              productsArray={productsArray}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route
          path='/cart/'
          element={
            <Cart
              cart={cart}
              handleQuantityChange={handleQuantityChange}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
      <footer>
        <img
          src={logoOutline}
          alt='Logo of a tea kettle with matcha tea on the side.'
        />
        <h5>Reverie Tea</h5>
        <p>
          Copyright &copy;{' '}
          <a href='https://github.com/Royuin' target='blank'>
            {' '}
            Royuin{' '}
          </a>
        </p>
        <a
          href='https://www.flaticon.com/free-icons/smart-cart'
          title='smart cart icons'
          target='blank'
        >
          Smart cart icons created by Muhammad_Usman - Flaticon
        </a>
        <br />
        <a
          href='https://www.flaticon.com/free-icons/matcha'
          title='matcha icons'
          target='blank'
        >
          Matcha icons created by amonrat rungreangfangsai - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
