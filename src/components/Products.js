import '../styles/Products.css';
import { useOutletContext } from 'react-router-dom';

function Products() {
  const products = useOutletContext();

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
