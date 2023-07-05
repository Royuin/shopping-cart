import {render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../components/Products';

describe('Products Page', () => {

  it('Products renderProducts renders all products in array', () => {

    const products = [
      { name: 'product1',
        src: '',
        alt: 'test text1',
        type: 'green',
        id: '1',
      },
      { name: 'product2',
        src: '',
        alt: 'test text2',
        type: 'black',
        id: '2'
      },
      { name: 'product3',
        src: '',
        alt: 'test text3',
        type: 'herbal',
        id: '3'
      }
    ]

    render( <Products products={products} />);

    expect(screen.getByAltText('test text1')).toBeInTheDocument();
    expect(screen.getByAltText('test text2')).toBeInTheDocument();
    expect(screen.getByAltText('test text3')).toBeInTheDocument();
  })
});
