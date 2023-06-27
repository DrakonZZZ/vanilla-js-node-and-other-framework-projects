import { useGlobalContext } from './context';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const CartItem = ({ id, img, title, price, amount }) => {
  const { increaseItem, decreaseItem, removeItem } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>

        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <IoMdArrowDropup className="cart-icon-down" />
        </button>

        <p className="amount">{amount}</p>

        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <IoMdArrowDropdown className="cart-icon-up" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
