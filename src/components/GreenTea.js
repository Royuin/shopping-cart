function GreenTea({productsArray}) {

  function renderProducts() {
    const filteredProducts = productsArray.filter((product) => product.type === 'green');
    const productItems = filteredProducts.map((product) => {
      return (
        <li key={product.id}>
          <img src={product.src} alt={product.alt} />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </li>
      )});
    return <ul className='product-list'> {productItems}</ul>
  }

  return (
    <main>
      <h2>Green Tea</h2>
      <p><em>Price is per 3 oz</em></p>
      {renderProducts()}
    </main>
  )
}

export default GreenTea;

