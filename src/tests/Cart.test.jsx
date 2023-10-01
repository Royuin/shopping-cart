import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProductDetailsLayout from '../components/ProductDetailsLayout';
import { createBrowserHistory } from '@remix-run/router';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Adding, editing or removing from cart', () => {
  it('addToCart function being called on button click for product', async () => {
    vi.mock('../App', () => ({
      __esModule: true,
      default: vi.fn(),
      addToCart: vi.fn(),
    }));

    const user = userEvent.setup();

    const addToCart = vi.fn();
    const history = createBrowserHistory();

    const productTest = {
      name: 'product name',
      price: 4.54,
      src: 'src mock',
      alt: 'alt mock',
      description: 'mock desciprion',
    };

    const productsArrayMock = [
      {
        name: 'product name',
        price: 4.54,
        src: 'src mock',
        alt: 'alt mock',
        description: 'mock description',
      },
    ];

    render(
      <MemoryRouter
        initialEntries={['/product/product name']}
        history={history}
      >
        <Routes>
          <Route
            path='product/:id'
            element={
              <ProductDetailsLayout
                addToCart={addToCart}
                productsArray={productsArrayMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByText(`Add To Cart - $${productTest.price}`));

    expect(addToCart).toHaveBeenCalled();
  });
});
