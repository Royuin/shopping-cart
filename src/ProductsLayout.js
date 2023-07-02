import {Routes, Route, Outlet, Link} from 'react-router-dom';
import matchaTableWhisk from './assets/matcha-table-whisk.jpg';
import { useState } from 'react';
import jasmine from './assets/jasmine-leaves.jpeg';
import chamomile from './assets/chamomile-leaves.jpg';
import black from './assets/black-tea-leaves.jpg';
import ceylon from './assets/ceylon-tea.jpg';
import rooibos from './assets/rooibos-tea.jpg';
import mallow from './assets/mallow-flowers.jpg';
import uniqid from 'uniqid';

function ProductsLayout() {
  const [products, setProducts] = useState([
    { name: 'Green Jasmine',
      src: jasmine,
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 15.65,
      id: uniqid(),
    },
    { name: 'Chamomile',
      src: chamomile,
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 12.39,
      id: uniqid(),
    },
    { name: 'Black',
      src: black,
      type: 'black',
      description: 'This is where it would go if you had one and a real product',
      price: 13.72,
      id: uniqid(),
    },
    { name: 'Ceylon Green',
      src: ceylon,
      type: 'green',
      description: 'This is where it would go if you had one and a real product',
      price: 17.24,
      id: uniqid(),
    },
    { name: 'Rooibos',
      src: rooibos,
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 17.73,
      id: uniqid(),
    },
    {name: 'Mallow',
      src: mallow,
      type: 'herbal',
      description: 'This is where it would go if you had one and a real product',
      price: 10.79,
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
              <li>Green Teas</li>
              <li>Black Teas</li>
              <li>Herbal</li>
              <li>Accessories</li>
            </ul>
          </nav>
        </aside>
        <Outlet context={products} />
      </div>
    </>
  )
}

export default ProductsLayout;
