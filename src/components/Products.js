import matchaTableWhisk from '../assets/matcha-table-whisk.jpg';
import '../styles/Products.css';

function Products() {
  return (
    <>
      <header className='products-header'>
        <img src={matchaTableWhisk} alt='' />
        <h2 className='our-products-heading'>Our Products</h2>
      </header>
    </>
  )
}

export default Products;
