import { useGlobalContext } from './context';
import { HiShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>Lootbox Store</h3>
        <div className="nav-container">
          <HiShoppingCart className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
