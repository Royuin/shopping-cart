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
            </ul>
          </nav>
        </aside>
        <Outlet context={productsArrayContext} />
      </div>
    </>
  )
}

export default ProductsLayout;
