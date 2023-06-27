import CartItem from './CartItem';
import { useGlobalContext } from './context';

const CartContainer = () => {
  const { cart, total, clearList } = useGlobalContext();
  console.log(cart);
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h3>Your Cart Items</h3>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h3>Your Cart Items</h3>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearList}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
