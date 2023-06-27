const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_LIST': {
      return { ...state, cart: [] };
    }
    case 'INCREASE': {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    }
    case 'DECREASE': {
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return { ...state, cart: tempCart };
    }
    case 'REMOVE_ITEM': {
      console.log(action);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case 'CART_TOTAL': {
      let { total, amount } = state.cart.reduce(
        (acc, item) => {
          const { price, amount } = item;
          const productTotal = price * amount;
          acc.total += productTotal;
          acc.amount += amount;

          return acc;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed());
      return { ...state, total, amount };
    }
    default:
      return state;
  }
};

export default reducer;
