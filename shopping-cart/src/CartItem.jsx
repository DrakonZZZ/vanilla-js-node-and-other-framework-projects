import { useGlobalContext } from './context';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>

        <button
          className="remove-btn"
          onClick={() => console.log('remove item')}
        >
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => console.log('increase')}>
          <IoMdArrowDropup className="cart-icon-down" />
        </button>

        <p className="amount">{amount}</p>

        <button className="amount-btn" onClick={() => console.log('decrease')}>
          <IoMdArrowDropdown className="cart-icon-up" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
