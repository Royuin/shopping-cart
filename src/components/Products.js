import matchaTableWhisk from '../assets/matcha-table-whisk.jpg';
import {Link} from 'react-router-dom';
import '../styles/Products.css';

function Products() {
  return (
    <>
      <header className='products-header'>
        <img src={matchaTableWhisk} alt='Matcha powder and whisk on a table' />
        <h2 className='our-products-heading'>Our Products</h2>
      </header>
      <aside>
        <nav aria-label='products'>
          <ul>
            <li><Link path='/products'>All Products</Link></li>
          <li>Matcha</li>
          <li>Green Teas</li>
          <li>Black Teas</li>
          <li>Herbal</li>
            <li>Accessories</li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Products;
