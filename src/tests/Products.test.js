import {render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products, {useOutletContext} from '../components/Products';
import Matcha from '../components/Matcha';
import ProductsLayout from '../ProductsLayout';
import React from 'react';
// import { useOutletContext } from 'react-router-dom';

describe('renderProducts functions for different products pages', () => {

  const productsMock = [
    { name: 'product1',
      src: '',
      alt: 'test text1',
      type: 'green',
      id: '1',
    },
    { name: 'product2',
      src: '',
      alt: 'test text2',
      type: 'matcha',
      id: '2'
    },
    { name: 'product3',
      src: '',
      alt: 'test text3',
      type: 'herbal',
      id: '3'
    },
    { name: 'product4',
      src: '',
      alt: 'test text4',
      type: 'black',
      id: '4'
    }
  ]

  it('Products renderProducts renders all products in array', async () => {

    const ProductsLayout = React.createContext(productsMock);
   // useOutletContext.mockReturnValue(productsMock);

   render(
      <ProductsLayout.Provider value={productsMock}>
      <Products  />
      </ProductsLayout.Provider>
    )


    expect(screen.getByAltText('test text1')).toBeInTheDocument();
    expect(screen.getByAltText('test text2')).toBeInTheDocument();
    expect(screen.getByAltText('test text3')).toBeInTheDocument();
  })

  // it('Matcha renderProducts only renders products with matcha type', () => {
  //
  //   render( <Matcha productsArray={productsMock} />);
  //
  //   expect(screen.getByAltText('test text2')).toBeInTheDocument();
  //   expect(screen.queryByAltText('test text1')).toBeNull();
  //   expect(screen.queryByAltText('test text3')).toBeNull();
  //   expect(screen.queryByAltText('test text4')).toBeNull();
  // })
});
