import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../components/Products';
import Matcha from '../components/Matcha';
import GreenTea from '../components/GreenTea';
import React from 'react';
import BlackTea from '../components/Black';
import HerbalTea from '../components/Herbal';

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

    render(<Products productsArray={productsMock} />)

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(4);
  })

  it('Matcha renderProducts only renders products with matcha type', () => {

    render( <Matcha productsArray={productsMock} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
  })

  it('GreenTea renderProducts only renders products with green type', () => {

    render( <GreenTea productsArray={productsMock} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
  })
  it('Herbal renderProducts only renders products with herbal type', () => {

    render( <HerbalTea productsArray={productsMock} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
  })
  it('Black renderProducts only renders products with black type', () => {

    render( <BlackTea productsArray={productsMock} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
  })
});
