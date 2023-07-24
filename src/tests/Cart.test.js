import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Router } from 'react-router-dom';
import App from '../App';
import ProductDetailsLayout from '../components/ProductDetailsLayout';
import { createBrowserHistory, createMemoryHistory } from '@remix-run/router';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
  addToCart: jest.fn(),
}));

describe('Adding, editing or removing from cart', () => {
  it('addToCart function being called on button click for product', async () => {

    const addToCart= require('../App').addToCart;
    const history = createBrowserHistory();

    const productTest = {
      name: 'product name',
      price: 4.54,
      src: 'src mock',
      alt: 'alt mock',
      description: 'mock desciprion',

    };

    const productsArrayMock = [{
      name: 'product name',
      price: 4.54,
      src: 'src mock',
      alt: 'alt mock',
      description: 'mock description',
    }];

    render(
      <MemoryRouter initialEntries={['/product/product name']} history={history}>

        <Routes>
          <Route
            path='product/:id'
            element={<ProductDetailsLayout addToCart={addToCart} productsArray={productsArrayMock} />} />
        </Routes>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(`Add To Cart - $${productTest.price}`));

    expect(addToCart).toHaveBeenCalled();
  });
});
