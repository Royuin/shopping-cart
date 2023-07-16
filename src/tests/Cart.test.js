// import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
// import { getByText, render, screen } from '@testing-library/react';
// import App from '../App';
// import ProductDetailsLayout from '../components/ProductDetailsLayout';
// import {
//   MemoryRouter,
//   Link,
//   Routes,
//   Route
// } from 'react-router-dom';
//
// jest.mock('../App.js', () => ({
//   addToCart: jest.fn()
// }));
//
// describe('Adding, editing or removing from cart', () => {
//   it('addToCart function adding product to cart state', () => {
//     const addToCartMock = require('../App').addToCart;
//
// render( 
// <MemoryRouter initialIndex={0} >
// <Routes>
//   <Route path='/product/:id' element={<ProductDetailsLayout addToCart={addToCartMock} />} />
// </Routes>
// </MemoryRouter>,
// {wrapper: MemoryRouter}
//     )
//
//
//     const productTest = {
//       name: 'title',
//       price: 4.54,
//     };
//
//
//     addToCartMock(productTest, 1);
//
//     const item = screen.getByText('1');
//     expect(item).toBeInTheDocument();
//   });
// });
//
// <MemoryRouter initialEntries={[routeMock]} initialIndex={0} >
// <Routes>
//   <Route path='/product/:id' element={<ProductDetailsLayout addToCart={useAddToCart} />} />
// </Routes>
// </MemoryRouter>,
// {wrapper: MemoryRouter}
//


// addToCart.mockImplementation(() => productTest, 1);

// render(
//   <MemoryRouter>
//     <App
//       path="/product/:id"
//       element={<ProductDetailsLayout addToCartMock={addToCartMock} />}
//     />
//
//     <Link
//       to={`/product/${productTest.name}`}
//       state={productTest}
//       className="product-img-wrapper"
//     >
//       View Product Details
//     </Link>
//   </MemoryRouter>
// );

// addToCartMock(productTest, 1);


import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';
import ProductDetailsLayout from '../components/ProductDetailsLayout';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
  addToCart: jest.fn(),
}));

describe('Adding, editing or removing from cart', () => {
  it('addToCart function adds product to cart state and updates cart link', async () => {
    const addToCartMock = require('../App').addToCart;

    const productTest = {
      name: 'title',
      price: 4.54,
    };

    render(
      <MemoryRouter initialEntries={['/product/productTest']}>
        <Routes>
          <Route
            path="/product/:id"
            element={<ProductDetailsLayout addToCart={addToCartMock} />}
          />
        </Routes>
      </MemoryRouter>,
      {wrapper: MemoryRouter}
    );

    // Simulate adding the product to the cart
    act(() => {
      fireEvent.click(screen.getByText(`Add To Cart - $${productTest.price}`));
    });

    // Verify that the addToCart function was called with the correct parameters
    expect(addToCartMock).toHaveBeenCalledWith(productTest, 1);

    // Verify that the cart link is updated with the correct quantity
    const cartLink = screen.getByText('1');
    expect(cartLink).toBeInTheDocument();
  });
});
