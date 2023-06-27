import { useGlobalContext } from './context';
import { HiShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>Reactor</h3>
        <div className="nav-container">
          <HiShoppingCart className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">3</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
