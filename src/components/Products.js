import '../styles/Products.css';
import { Link } from 'react-router-dom';

function Products({productsArray}) {

  function renderProducts() {
    const productItems = productsArray.map((product) => {
      return (
        <li key={product.id}>
          <Link to={/product/ + product.name} className='product-img-wrapper'>
            <img src={product.src} alt={product.alt} />
            <div className='product-img-overlay'>
              <p className='view-text'>View</p>
            </div>
          </Link>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </li>
      )});
    return <ul className='product-list'> {productItems}</ul>
  }

  return (
    <main>
      <h2>All Products</h2>
      <p><em>Price is per 3 oz</em></p>
      {renderProducts()}
    </main>
  )

}

export default Products;
