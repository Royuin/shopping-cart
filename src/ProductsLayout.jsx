import { Outlet, Link } from 'react-router-dom';

function ProductsLayout() {
  return (
    <>
      <header className='products-header'>
        <h2 className='our-products-heading'>Our Products</h2>
      </header>
      <div className='products-with-aside'>
        <aside>
          <nav aria-label='products'>
            <ul>
              <li>
                <Link to='/products'>All Products</Link>
              </li>
              <li>
                <Link to='/products/matcha'>Matcha</Link>
              </li>
              <li>
                <Link to='/products/green-tea'>Green Teas</Link>
              </li>
              <li>
                <Link to='/products/black-tea'>Black Teas</Link>
              </li>
              <li>
                <Link to='/products/herbal-tea'>Herbal</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Outlet />
      </div>
    </>
  );
}

export default ProductsLayout;
