import { useState } from 'react';
import '../styles/Products.css';
import uniqid from 'uniqid';
import jasmine from '../assets/jasmine-leaves.jpeg';
import chamomile from '../assets/chamomile-leaves.jpg';

function Products() {

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
    }
  ]);

  function renderProducts() {
   const productItems = products.map((product) => {
   return (
    <li key={product.id}>
    <img src={product.src} alt='' />
    <p>{product.name}</p>
    <p>${product.price}</p>
    </li>
    )});

    return <ul className='product-list'> {productItems}</ul>
  }

  return (
    <main>
      <h2>All Products</h2>
      <p><em>Price is per 3 oz </em></p>
      {renderProducts()}
    </main>
  )

}

export default Products;
