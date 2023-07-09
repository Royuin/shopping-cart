import { Outlet, Link} from 'react-router-dom';
import matchaTableWhisk from './assets/matcha-table-whisk.jpg';

function ProductsLayout() {
  return (
    <>
      <header className='products-header'>
        <img src={matchaTableWhisk} alt='Matcha powder and whisk on a table' />
        <h2 className='our-products-heading'>Our Products</h2>
      </header>
      <div className='products-with-aside'>
        <aside>
          <nav aria-label='products'>
            <ul>
              <li><Link to='/products'>All Products</Link></li>
              <li><Link to='/products/matcha'>Matcha</Link></li>
              <li><Link to='/products/green-tea'>Green Teas</Link></li>
              <li>Black Teas</li>
              <li>Herbal</li>
            </ul>
          </nav>
        </aside>
        <Outlet />
      </div>
    </>
  )
}

export default ProductsLayout;
