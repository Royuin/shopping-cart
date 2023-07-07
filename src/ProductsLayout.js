import {Routes, Route, Outlet, Link} from 'react-router-dom';
import matchaTableWhisk from './assets/matcha-table-whisk.jpg';
import { useState } from 'react';
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
import uniqid from 'uniqid';

function ProductsLayout() {
  const [productsArrayContext, setProductsArrayContext] = useState([
    { name: 'Green Jasmine',
      src: jasmine,
      alt: 'dried green jasmine tea leaves',
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 15.65,
      id: uniqid(),
    },
    { name: 'Chamomile',
      src: chamomile,
      alt: 'dried chamomile flowsers',
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 12.39,
      id: uniqid(),
    },
    { name: 'Black',
      src: black,
      alt: 'dried black tea leaves',
      type: 'black',
      description: 'This is where it would go if you had one and a real product',
      price: 13.72,
      id: uniqid(),
    },
    { name: 'Ceylon Green',
      src: ceylon,
      alt: 'dried dark green tea leaves',
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 17.24,
      id: uniqid(),
    },
    { name: 'Rooibos',
      src: rooibos,
      alt: 'Dried red and orange tea leaves with bits of green',
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 17.73,
      id: uniqid(),
    },
    {name: 'Mallow',
      src: mallow,
      alt: 'Dried purple flowers with green stems',
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 10.79,
      id: uniqid(),
    },
    { name: 'Xianzhi Green',
      src: xianzhi,
      alt: 'Long dried jade green leaves',
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 21.97,
      id: uniqid(),
    },
    { name: 'Reverie Green Blend',
      src: reverieGreenBlend,
      alt: 'Dried green leaves with bits of blue',
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 18.14,
      id: uniqid(),
    },
    { name: 'Matcha Cooking Grade',
      src: matchaCooking,
      alt: 'Dull green powder',
      type: 'matcha',
      description: 'This is where it would go if you had one and a real product',
      price: 23.28,
      id: uniqid(),
    },
    { name: 'Matcha Ceremonial Grade',
      src: matchaCeremonial,
      alt: 'Bright green powder',
      type: 'matcha',
      description: 'This is where it would go if you had one and a real product',
      price: 29.59,
      id: uniqid(),
    }
  ])

  return (
    <>
      <header className='products-header'>
        <img src={matchaTableWhisk} alt='Matcha powder and whisk on a table' />
        <h2 className='our-products-heading'>Our Products</h2>
      </header>
      <div className='products-with-aside'>
        <aside>
          <nav aria-label='products'>
            <ul>
              <li><Link to='/products'>All Products</Link></li>
              <li><Link to='/products/matcha'>Matcha</Link></li>
              <li><Link to='/products/green-tea'>Green Teas</Link></li>
              <li>Black Teas</li>
              <li>Herbal</li>
              <li>Accessories</li>
            </ul>
          </nav>
        </aside>
        <Outlet context={productsArrayContext} />
      </div>
    </>
  )
}

export default ProductsLayout;
