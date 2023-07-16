import '../styles/Cart.css';

function Cart({ cart} ) {
  function renderProducts() {
    const cartItems = cart.map((product) => {
      return (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </li>
      );
    });

    return <ul>{cartItems}</ul>;
  }

  return (
    <>
      {renderProducts()}
    </>
  )
}

export default Cart;
